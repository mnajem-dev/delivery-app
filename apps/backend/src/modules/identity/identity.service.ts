import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ApprovalEnum,
  DriverStatus,
  Prisma,
  RoleEnum,
  StatusEnum,
  User,
} from '../../database/generated/prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { OtpProviderService } from './services/otp-provider.service';

const MAX_OTP_ATTEMPTS = 5;
const OTP_BLOCK_MINUTES = 15;

const BCRYPT_ROUNDS = 12;

type PublicUser = Pick<
  User,
  'id' | 'name' | 'email' | 'phone' | 'role' | 'status' | 'createdAt'
>;

@Injectable()
export class IdentityService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly otpProvider: OtpProviderService,
  ) {}

  async register(dto: RegisterDto) {
    if (dto.role === RoleEnum.ADMIN && !dto.department) {
      throw new BadRequestException('department is required for ADMIN role');
    }

    const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);

    try {
      const user = await this.prisma.$transaction(async (tx) => {
        const createdUser = await tx.user.create({
          data: {
            name: dto.name,
            email: dto.email,
            phone: dto.phone,
            passwordHash,
            role: dto.role,
            status: this.defaultStatusForRole(dto.role),
          },
        });

        await this.createRoleProfile(tx, createdUser.id, dto);
        return createdUser;
      });

      return this.buildAuthResponse(user);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email or phone already registered');
      }
      throw error;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user.status === StatusEnum.SUSPENDED) {
      throw new UnauthorizedException('Account suspended');
    }

    return this.buildAuthResponse(user);
  }

  async getProfile(userId: string): Promise<PublicUser> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        status: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }

  async requestOtp(dto: RequestOtpDto) {
    const existing = await this.prisma.otpRequest.findFirst({
      where: { phone: dto.phone },
      orderBy: { createdAt: 'desc' },
    });

    if (existing?.blockedUntil && existing.blockedUntil > new Date()) {
      const retryAfter = Math.ceil(
        (existing.blockedUntil.getTime() - Date.now()) / 1000,
      );
      throw new ForbiddenException(
        `Too many attempts. Try again in ${retryAfter} seconds.`,
      );
    }

    const sent = await this.otpProvider.sendOtp(dto.phone);

    await this.prisma.otpRequest.create({
      data: {
        requestId: sent.requestId,
        phone: sent.phone,
        expiresAt: new Date(sent.expiresAt),
      },
    });

    return {
      requestId: sent.requestId,
      expiresAt: sent.expiresAt,
      expiresInSeconds: sent.expiresInSeconds,
    };
  }

  async verifyOtp(dto: VerifyOtpDto) {
    const otpRecord = await this.prisma.otpRequest.findUnique({
      where: { requestId: dto.requestId },
    });

    if (!otpRecord) {
      throw new NotFoundException('OTP request not found');
    }

    if (otpRecord.blockedUntil && otpRecord.blockedUntil > new Date()) {
      const retryAfter = Math.ceil(
        (otpRecord.blockedUntil.getTime() - Date.now()) / 1000,
      );
      throw new ForbiddenException(
        `Too many attempts. Try again in ${retryAfter} seconds.`,
      );
    }

    if (otpRecord.expiresAt < new Date()) {
      throw new BadRequestException('OTP has expired');
    }

    const result = await this.otpProvider.verifyOtp(dto.requestId, dto.code);

    if (!result.verified) {
      const newAttempts = otpRecord.attempts + 1;
      const blockedUntil =
        newAttempts >= MAX_OTP_ATTEMPTS
          ? new Date(Date.now() + OTP_BLOCK_MINUTES * 60 * 1000)
          : null;

      await this.prisma.otpRequest.update({
        where: { id: otpRecord.id },
        data: { attempts: newAttempts, blockedUntil },
      });

      if (blockedUntil) {
        throw new ForbiddenException(
          `Too many failed attempts. Account locked for ${OTP_BLOCK_MINUTES} minutes.`,
        );
      }

      throw new BadRequestException('Invalid OTP code');
    }

    // OTP verified — create user account
    try {
      const user = await this.prisma.$transaction(async (tx) => {
        const created = await tx.user.create({
          data: {
            name: dto.name,
            email: dto.email ?? null,
            phone: otpRecord.phone,
            passwordHash: null,
            role: RoleEnum.CLIENT,
            status: StatusEnum.ACTIVE,
          },
        });
        await tx.client.create({ data: { userId: created.id } });
        return created;
      });

      await this.prisma.otpRequest.delete({ where: { id: otpRecord.id } });

      return this.buildAuthResponse(user);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Phone or email already registered');
      }
      throw error;
    }
  }

  private defaultStatusForRole(role: RoleEnum): StatusEnum {
    if (role === RoleEnum.DRIVER || role === RoleEnum.VENDOR) {
      return StatusEnum.PENDING;
    }

    return StatusEnum.ACTIVE;
  }

  private async createRoleProfile(
    tx: Prisma.TransactionClient,
    userId: string,
    dto: RegisterDto,
  ): Promise<void> {
    switch (dto.role) {
      case RoleEnum.CLIENT:
        await tx.client.create({ data: { userId } });
        return;
      case RoleEnum.DRIVER:
        await tx.driver.create({
          data: {
            userId,
            status: DriverStatus.OFFLINE,
            approvalStatus: ApprovalEnum.PENDING,
          },
        });
        return;
      case RoleEnum.VENDOR:
        await tx.vendor.create({
          data: {
            userId,
            name: dto.vendorName!,
            address: dto.address!,
            lat: dto.lat!,
            lng: dto.lng!,
            isOpen: false,
            rating: 0,
            deliveryRadius: 5,
            commissionRate: 0.15,
          },
        });
        return;
      case RoleEnum.ADMIN:
        await tx.admin.create({
          data: {
            userId,
            department: dto.department!,
          },
        });
        return;
      default:
        throw new BadRequestException('Unsupported role');
    }
  }

  private buildAuthResponse(user: User) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: this.toPublicUser(user),
    };
  }

  private toPublicUser(user: User): PublicUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
    };
  }
}

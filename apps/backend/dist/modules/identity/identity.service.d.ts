import { JwtService } from '@nestjs/jwt';
import { User } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { OtpProviderService } from './services/otp-provider.service';
type PublicUser = Pick<User, 'id' | 'name' | 'email' | 'phone' | 'role' | 'status' | 'createdAt'>;
export declare class IdentityService {
    private readonly prisma;
    private readonly jwtService;
    private readonly otpProvider;
    constructor(prisma: PrismaService, jwtService: JwtService, otpProvider: OtpProviderService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        user: PublicUser;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: PublicUser;
    }>;
    getProfile(userId: string): Promise<PublicUser>;
    requestOtp(dto: RequestOtpDto): Promise<{
        requestId: string;
        expiresAt: string;
        expiresInSeconds: number;
    }>;
    verifyOtp(dto: VerifyOtpDto): Promise<{
        accessToken: string;
        user: PublicUser;
    }>;
    private defaultStatusForRole;
    private createRoleProfile;
    private buildAuthResponse;
    private toPublicUser;
}
export {};

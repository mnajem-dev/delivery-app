import { RoleEnum } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { IdentityService } from './identity.service';
import { AuthenticatedUser } from './interfaces/jwt-payload.interface';
export declare class IdentityController {
    private readonly identityService;
    private readonly prisma;
    constructor(identityService: IdentityService, prisma: PrismaService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            phone: string;
            createdAt: Date;
            name: string;
            email: string | null;
            role: RoleEnum;
            status: import("../../database/generated/prisma/enums").StatusEnum;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            phone: string;
            createdAt: Date;
            name: string;
            email: string | null;
            role: RoleEnum;
            status: import("../../database/generated/prisma/enums").StatusEnum;
        };
    }>;
    requestOtp(dto: RequestOtpDto): Promise<{
        requestId: string;
        expiresAt: string;
        expiresInSeconds: number;
    }>;
    verifyOtp(dto: VerifyOtpDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            phone: string;
            createdAt: Date;
            name: string;
            email: string | null;
            role: RoleEnum;
            status: import("../../database/generated/prisma/enums").StatusEnum;
        };
    }>;
    me(user: AuthenticatedUser): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        name: string;
        email: string | null;
        role: RoleEnum;
        status: import("../../database/generated/prisma/enums").StatusEnum;
    }>;
    registerDeviceToken(body: {
        token: string;
        platform: string;
    }, user: AuthenticatedUser): import("../../database/generated/prisma/models").Prisma__DeviceTokenClient<{
        id: string;
        createdAt: Date;
        userId: string;
        token: string;
        platform: string;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../database/generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    adminPing(user: AuthenticatedUser): {
        message: string;
        userId: string;
    };
}

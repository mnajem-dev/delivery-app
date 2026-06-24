import { RoleEnum } from '../../database/generated/prisma/client';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { IdentityService } from './identity.service';
import { AuthenticatedUser } from './interfaces/jwt-payload.interface';
export declare class IdentityController {
    private readonly identityService;
    constructor(identityService: IdentityService);
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
    adminPing(user: AuthenticatedUser): {
        message: string;
        userId: string;
    };
}

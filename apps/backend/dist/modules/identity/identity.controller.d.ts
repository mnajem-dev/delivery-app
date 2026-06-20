import { RoleEnum } from '../../database/generated/prisma/client';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { IdentityService } from './identity.service';
import { AuthenticatedUser } from './interfaces/jwt-payload.interface';
export declare class IdentityController {
    private readonly identityService;
    constructor(identityService: IdentityService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            phone: string;
            role: RoleEnum;
            status: import("../../database/generated/prisma/enums").StatusEnum;
            createdAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            phone: string;
            role: RoleEnum;
            status: import("../../database/generated/prisma/enums").StatusEnum;
            createdAt: Date;
        };
    }>;
    me(user: AuthenticatedUser): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        role: RoleEnum;
        status: import("../../database/generated/prisma/enums").StatusEnum;
        createdAt: Date;
    }>;
    adminPing(user: AuthenticatedUser): {
        message: string;
        userId: string;
    };
}

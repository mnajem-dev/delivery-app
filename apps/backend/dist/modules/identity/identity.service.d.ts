import { JwtService } from '@nestjs/jwt';
import { User } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
type PublicUser = Pick<User, 'id' | 'name' | 'email' | 'phone' | 'role' | 'status' | 'createdAt'>;
export declare class IdentityService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        user: PublicUser;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: PublicUser;
    }>;
    getProfile(userId: string): Promise<PublicUser>;
    private defaultStatusForRole;
    private createRoleProfile;
    private buildAuthResponse;
    private toPublicUser;
}
export {};

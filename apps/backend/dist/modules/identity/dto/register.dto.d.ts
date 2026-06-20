import { RoleEnum } from '../../../database/generated/prisma/client';
export declare class RegisterDto {
    name: string;
    email: string;
    phone: string;
    role: RoleEnum;
    password: string;
    vendorName?: string;
    address?: string;
    lat?: number;
    lng?: number;
    department?: string;
}

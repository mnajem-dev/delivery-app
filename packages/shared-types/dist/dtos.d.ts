import { RoleEnum } from './enums';
export interface LoginDto {
    email: string;
    password: string;
}
export interface RegisterDto {
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
export interface AddressDto {
    id: string;
    clientId: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
}
export interface CreateAddressDto {
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault?: boolean;
}
export interface UpdateAddressDto {
    label?: string;
    fullAddress?: string;
    lat?: number;
    lng?: number;
}
export interface CreateOrderDto {
    deliveryAddressId: string;
    tipMinor?: number;
}
export interface AuthResponse {
    accessToken: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: RoleEnum;
    };
}

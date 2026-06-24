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
  // VENDOR-only
  vendorName?: string;
  address?: string;
  lat?: number;
  lng?: number;
  // ADMIN-only
  department?: string;
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

import { ApiClient } from '../client';
import { AuthResponse, LoginDto, RegisterDto } from '@delivery-app/shared-types';
export declare function createAuthEndpoints(client: ApiClient): {
    login: (body: LoginDto) => Promise<AuthResponse>;
    register: (body: RegisterDto) => Promise<AuthResponse>;
    me: () => Promise<Pick<import("@delivery-app/shared-types").PublicUser, "id" | "name" | "email" | "role">>;
};

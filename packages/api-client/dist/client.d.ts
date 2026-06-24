import type { AddressDto, CreateAddressDto, UpdateAddressDto } from '@delivery-app/shared-types';
export declare function createApiClient(baseUrl: string, token?: string): {
    get<T>(path: string): Promise<T>;
    post<T>(path: string, body: unknown): Promise<T>;
    put<T>(path: string, body: unknown): Promise<T>;
    patch<T>(path: string, body?: unknown): Promise<T>;
    delete(path: string): Promise<void>;
    withToken(newToken: string): /*elided*/ any;
    addresses: {
        list: () => Promise<AddressDto[]>;
        get: (id: string) => Promise<AddressDto>;
        create: (dto: CreateAddressDto) => Promise<AddressDto>;
        update: (id: string, dto: UpdateAddressDto) => Promise<AddressDto>;
        setDefault: (id: string) => Promise<AddressDto>;
        remove: (id: string) => Promise<void>;
    };
};
export type ApiClient = ReturnType<typeof createApiClient>;

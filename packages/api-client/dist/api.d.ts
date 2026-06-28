import { AddressDto, CreateAddressDto, UpdateAddressDto } from '@delivery-app/shared-types';
import { ApiClient } from './client';
import { AdminApi } from './endpoints/admin';
import { createAuthEndpoints } from './endpoints/auth';
import { CartApi } from './endpoints/cart';
import { CatalogApi } from './endpoints/catalog';
import { DriversApi } from './endpoints/drivers';
import { OrdersApi } from './endpoints/orders';
import { RatingsApi } from './endpoints/ratings';
import { VendorOpsApi } from './endpoints/vendors';
export interface AddressesApi {
    list(): Promise<AddressDto[]>;
    get(id: string): Promise<AddressDto>;
    create(dto: CreateAddressDto): Promise<AddressDto>;
    update(id: string, dto: UpdateAddressDto): Promise<AddressDto>;
    setDefault(id: string): Promise<AddressDto>;
    remove(id: string): Promise<void>;
}
export interface AuthApi {
    login: ReturnType<typeof createAuthEndpoints>['login'];
    register: ReturnType<typeof createAuthEndpoints>['register'];
    me: ReturnType<typeof createAuthEndpoints>['me'];
}
/**
 * The whole typed API surface. Both the real HTTP client (createApi) and the
 * offline mock (createMockApiClient) implement THIS interface — so they can't
 * drift, and a screen written against the mock works unchanged against the server.
 */
export interface Api {
    raw: ApiClient;
    auth: AuthApi;
    addresses: AddressesApi;
    catalog: CatalogApi;
    cart: CartApi;
    orders: OrdersApi;
    drivers: DriversApi;
    vendors: VendorOpsApi;
    admin: AdminApi;
    ratings: RatingsApi;
}
/** Real API bound to the backend. */
export declare function createApi(baseUrl: string, token?: string): Api;

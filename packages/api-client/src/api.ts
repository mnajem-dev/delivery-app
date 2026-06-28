import {
  AddressDto,
  CreateAddressDto,
  UpdateAddressDto,
} from '@delivery-app/shared-types';
import { ApiClient, createApiClient } from './client';
import { createAdminEndpoints, AdminApi } from './endpoints/admin';
import { createAuthEndpoints } from './endpoints/auth';
import { createCartEndpoints, CartApi } from './endpoints/cart';
import { createCatalogEndpoints, CatalogApi } from './endpoints/catalog';
import { createDriverEndpoints, DriversApi } from './endpoints/drivers';
import { createOrderEndpoints, OrdersApi } from './endpoints/orders';
import { createRatingsEndpoints, RatingsApi } from './endpoints/ratings';
import { createVendorOpsEndpoints, VendorOpsApi } from './endpoints/vendors';

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
export function createApi(baseUrl: string, token?: string): Api {
  const client = createApiClient(baseUrl, token);
  return {
    raw: client,
    auth: createAuthEndpoints(client),
    addresses: client.addresses,
    catalog: createCatalogEndpoints(client),
    cart: createCartEndpoints(client),
    orders: createOrderEndpoints(client),
    drivers: createDriverEndpoints(client),
    vendors: createVendorOpsEndpoints(client),
    admin: createAdminEndpoints(client),
    ratings: createRatingsEndpoints(client),
  };
}

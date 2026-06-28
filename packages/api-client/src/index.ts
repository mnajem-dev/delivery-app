// Low-level client (generic get/post/... + addresses namespace + withToken)
export { createApiClient } from './client';
export type { ApiClient } from './client';

// One typed entry point for every domain + the offline mock.
export { createApi } from './api';
export { createMockApiClient } from './mock';
export type {
  Api,
  AddressesApi,
  AuthApi,
} from './api';

// Per-domain endpoint factories + their interfaces (for advanced use).
export { createAuthEndpoints } from './endpoints/auth';
export { createOrderEndpoints, type OrdersApi } from './endpoints/orders';
export { createCatalogEndpoints, type CatalogApi } from './endpoints/catalog';
export { createCartEndpoints, type CartApi } from './endpoints/cart';
export { createDriverEndpoints, type DriversApi } from './endpoints/drivers';
export { createVendorOpsEndpoints, type VendorOpsApi } from './endpoints/vendors';
export { createAdminEndpoints, type AdminApi } from './endpoints/admin';
export { createRatingsEndpoints, type RatingsApi } from './endpoints/ratings';

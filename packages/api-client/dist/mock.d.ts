import { Api } from './api';
/**
 * Offline mock of the whole API, backed by the shared fixtures. No network.
 * Lets a frontend intern build a screen before its backend endpoint exists:
 *
 *   const api = USE_MOCK ? createMockApiClient() : createApi(baseUrl, token);
 *   const vendors = await api.catalog.listVendors();
 */
export declare function createMockApiClient(): Api;

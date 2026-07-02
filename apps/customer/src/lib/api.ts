import { createApi, createMockApiClient } from '@delivery-app/api-client';
import { API_BASE_URL, USE_MOCK_API } from '../config/env';

export function getApi(token?: string) {
  if (USE_MOCK_API) {
    return createMockApiClient();
  }

  return createApi(API_BASE_URL, token);
}

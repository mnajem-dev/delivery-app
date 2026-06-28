import { ApiClient } from '../client';
import { CreateRatingDto } from '@delivery-app/shared-types';

/** Ratings (US-901). PLANNED endpoint — build against the mock until it lands. */
export interface RatingsApi {
  rateOrder(orderId: string, dto: CreateRatingDto): Promise<void>;
}

export function createRatingsEndpoints(client: ApiClient): RatingsApi {
  return {
    rateOrder: (orderId, dto) =>
      client.post<void>(`/orders/${orderId}/rating`, dto),
  };
}

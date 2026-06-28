import { ApiClient } from '../client';
import { AdminStatsDto, OrderDto } from '@delivery-app/shared-types';

/** Admin ops (US-801/802/805). `stats`/`listOrders`/`suspendUser` exist; others planned. */
export interface AdminApi {
  stats(): Promise<AdminStatsDto>;
  listOrders(): Promise<OrderDto[]>;
  suspendUser(userId: string): Promise<void>;
}

export function createAdminEndpoints(client: ApiClient): AdminApi {
  return {
    stats: () => client.get<AdminStatsDto>('/admin/stats'),
    listOrders: () => client.get<OrderDto[]>('/admin/orders'),
    suspendUser: (userId) =>
      client.post<void>(`/admin/users/${userId}/suspend`, {}),
  };
}

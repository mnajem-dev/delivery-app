import { ApiClient } from '../client';
import { AdminStatsDto, OrderDto } from '@delivery-app/shared-types';
/** Admin ops (US-801/802/805). `stats`/`listOrders`/`suspendUser` exist; others planned. */
export interface AdminApi {
    stats(): Promise<AdminStatsDto>;
    listOrders(): Promise<OrderDto[]>;
    suspendUser(userId: string): Promise<void>;
}
export declare function createAdminEndpoints(client: ApiClient): AdminApi;

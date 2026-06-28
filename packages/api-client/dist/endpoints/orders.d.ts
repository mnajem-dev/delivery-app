import { ApiClient } from '../client';
import { CreateOrderDto, OrderDto } from '@delivery-app/shared-types';
export interface OrdersApi {
    create(dto: CreateOrderDto): Promise<OrderDto>;
    list(): Promise<OrderDto[]>;
    getById(id: string): Promise<OrderDto>;
}
export declare function createOrderEndpoints(client: ApiClient): OrdersApi;

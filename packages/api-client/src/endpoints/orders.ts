import { ApiClient } from '../client';
import { CreateOrderDto, OrderDto } from '@delivery-app/shared-types';

export interface OrdersApi {
  create(dto: CreateOrderDto): Promise<OrderDto>;
  list(): Promise<OrderDto[]>;
  getById(id: string): Promise<OrderDto>;
}

export function createOrderEndpoints(client: ApiClient): OrdersApi {
  return {
    create: (dto) => client.post<OrderDto>('/orders', dto),
    list: () => client.get<OrderDto[]>('/orders'),
    getById: (id) => client.get<OrderDto>(`/orders/${id}`),
  };
}

import { ApiClient } from '../client';
import { CreateOrderDto, OrderStatus, RoleEnum } from '@delivery-app/shared-types';

interface OrderItem {
  id: string;
  menuItemId: string;
  quantity: number;
  unitPriceMinor: number;
  unitPriceCurrency: string;
  menuItem: { name: string; imageUrl: string | null };
}

interface Order {
  id: string;
  clientId: string;
  vendorId: string;
  status: OrderStatus;
  subtotalMinor: number;
  subtotalCurrency: string;
  totalMinor: number;
  totalCurrency: string;
  tipMinor: number;
  createdAt: string;
  vendor: { name: string; logoUrl: string | null };
  items: OrderItem[];
}

export function createOrderEndpoints(client: ApiClient) {
  return {
    create: (body: CreateOrderDto) =>
      client.post<Order>('/orders', body),

    list: () =>
      client.get<Order[]>('/orders'),

    getById: (id: string) =>
      client.get<Order>(`/orders/${id}`),
  };
}

import { ApiClient } from '../client';
import { AcceptOrderDto, OrderDto } from '@delivery-app/shared-types';

/**
 * Vendor order intake (US-702). Endpoints are PLANNED — not yet implemented on the
 * backend. The shapes here are the agreed contract; build against the mock client
 * until the backend story lands, then it Just Works.
 */
export interface VendorOpsApi {
  listIncomingOrders(): Promise<OrderDto[]>;
  acceptOrder(orderId: string, dto: AcceptOrderDto): Promise<OrderDto>;
}

export function createVendorOpsEndpoints(client: ApiClient): VendorOpsApi {
  return {
    listIncomingOrders: () => client.get<OrderDto[]>('/vendor/orders'),
    acceptOrder: (orderId, dto) =>
      client.post<OrderDto>(`/vendor/orders/${orderId}/accept`, dto),
  };
}

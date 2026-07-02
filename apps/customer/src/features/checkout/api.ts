import type { CreateOrderDto } from '@delivery-app/shared-types';

import { getApi } from '../../lib/api';

export async function createOrder(
  token: string,
  dto: CreateOrderDto,
) {
  return getApi(token).orders.create(dto);
}

export async function getOrders(token: string) {
  return getApi(token).orders.list();
}

export async function getOrder(
  token: string,
  id: string,
) {
  return getApi(token).orders.getById(id);
}

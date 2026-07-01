import type {
  AddCartItemDto,
  UpdateCartItemDto,
} from '@delivery-app/shared-types';

import { getApi } from '../../lib/api';

export async function getCart(token: string) {
  return getApi(token).cart.get();
}

export async function addToCart(
  token: string,
  dto: AddCartItemDto,
) {
  return getApi(token).cart.addItem(dto);
}

export async function updateCartItem(
  token: string,
  itemId: string,
  dto: UpdateCartItemDto,
) {
  return getApi(token).cart.updateItem(itemId, dto);
}

export async function removeCartItem(
  token: string,
  itemId: string,
) {
  return getApi(token).cart.removeItem(itemId);
}

export async function clearCart(token: string) {
  return getApi(token).cart.clear();
}

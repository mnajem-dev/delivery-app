import { ApiClient } from '../client';
import {
  AddCartItemDto,
  CartDto,
  CartItemDto,
  UpdateCartItemDto,
} from '@delivery-app/shared-types';

export interface CartApi {
  get(): Promise<CartDto>;
  addItem(dto: AddCartItemDto): Promise<CartItemDto>;
  updateItem(itemId: string, dto: UpdateCartItemDto): Promise<CartItemDto>;
  removeItem(itemId: string): Promise<void>;
  clear(): Promise<void>;
}

export function createCartEndpoints(client: ApiClient): CartApi {
  return {
    get: () => client.get<CartDto>('/cart'),
    addItem: (dto) => client.post<CartItemDto>('/cart/items', dto),
    updateItem: (itemId, dto) =>
      client.patch<CartItemDto>(`/cart/items/${itemId}`, dto),
    removeItem: (itemId) => client.delete(`/cart/items/${itemId}`),
    clear: () => client.delete('/cart'),
  };
}

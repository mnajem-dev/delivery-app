import { ApiClient } from '../client';
import { AddCartItemDto, CartDto, CartItemDto, UpdateCartItemDto } from '@delivery-app/shared-types';
export interface CartApi {
    get(): Promise<CartDto>;
    addItem(dto: AddCartItemDto): Promise<CartItemDto>;
    updateItem(itemId: string, dto: UpdateCartItemDto): Promise<CartItemDto>;
    removeItem(itemId: string): Promise<void>;
    clear(): Promise<void>;
}
export declare function createCartEndpoints(client: ApiClient): CartApi;

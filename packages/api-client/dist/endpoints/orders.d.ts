import { ApiClient } from '../client';
import { CreateOrderDto, OrderStatus } from '@delivery-app/shared-types';
interface OrderItem {
    id: string;
    menuItemId: string;
    quantity: number;
    unitPriceMinor: number;
    unitPriceCurrency: string;
    menuItem: {
        name: string;
        imageUrl: string | null;
    };
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
    vendor: {
        name: string;
        logoUrl: string | null;
    };
    items: OrderItem[];
}
export declare function createOrderEndpoints(client: ApiClient): {
    create: (body: CreateOrderDto) => Promise<Order>;
    list: () => Promise<Order[]>;
    getById: (id: string) => Promise<Order>;
};
export {};

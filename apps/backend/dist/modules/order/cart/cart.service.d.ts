import { PrismaService } from '../../../database/prisma.service';
import { AddCartItemDto } from '../dto/add-cart-item.dto';
import { UpdateCartItemDto } from '../dto/update-cart-item.dto';
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCart(clientId: string): Promise<{
        items: never[];
        subtotalMinor: number;
        currency: null;
    } | {
        subtotalMinor: number;
        currency: string;
        vendor: {
            name: string;
            userId: string;
            logoUrl: string | null;
        };
        items: ({
            menuItem: {
                id: string;
                name: string;
                vendorId: string;
                priceMinor: number;
                priceCurrency: string;
                category: string;
                imageUrl: string | null;
                isAvailable: boolean;
                options: import("@prisma/client/runtime/client").JsonValue;
            };
        } & {
            id: string;
            cartId: string;
            menuItemId: string;
            quantity: number;
            unitPriceMinor: number;
            unitPriceCurrency: string;
            selectedOptions: import("@prisma/client/runtime/client").JsonValue;
        })[];
        id: string;
        createdAt: Date;
        clientId: string;
        vendorId: string;
    }>;
    addItem(clientId: string, dto: AddCartItemDto): Promise<{
        menuItem: {
            id: string;
            name: string;
            vendorId: string;
            priceMinor: number;
            priceCurrency: string;
            category: string;
            imageUrl: string | null;
            isAvailable: boolean;
            options: import("@prisma/client/runtime/client").JsonValue;
        };
    } & {
        id: string;
        cartId: string;
        menuItemId: string;
        quantity: number;
        unitPriceMinor: number;
        unitPriceCurrency: string;
        selectedOptions: import("@prisma/client/runtime/client").JsonValue;
    }>;
    updateItem(clientId: string, cartItemId: string, dto: UpdateCartItemDto): Promise<{
        menuItem: {
            id: string;
            name: string;
            vendorId: string;
            priceMinor: number;
            priceCurrency: string;
            category: string;
            imageUrl: string | null;
            isAvailable: boolean;
            options: import("@prisma/client/runtime/client").JsonValue;
        };
    } & {
        id: string;
        cartId: string;
        menuItemId: string;
        quantity: number;
        unitPriceMinor: number;
        unitPriceCurrency: string;
        selectedOptions: import("@prisma/client/runtime/client").JsonValue;
    }>;
    removeItem(clientId: string, cartItemId: string): Promise<void>;
    clearCart(clientId: string): Promise<void>;
    private assertOwnsCartItem;
}

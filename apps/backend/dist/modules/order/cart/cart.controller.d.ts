import { AuthenticatedUser } from '../../identity/interfaces/jwt-payload.interface';
import { AddCartItemDto } from '../dto/add-cart-item.dto';
import { UpdateCartItemDto } from '../dto/update-cart-item.dto';
import { CartService } from './cart.service';
export declare class CartController {
    private readonly cart;
    constructor(cart: CartService);
    getCart(user: AuthenticatedUser): Promise<{
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
    addItem(user: AuthenticatedUser, dto: AddCartItemDto): Promise<{
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
    updateItem(user: AuthenticatedUser, id: string, dto: UpdateCartItemDto): Promise<{
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
    removeItem(user: AuthenticatedUser, id: string): Promise<void>;
    clearCart(user: AuthenticatedUser): Promise<void>;
}

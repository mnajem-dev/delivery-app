import { AuthenticatedUser } from '../identity/interfaces/jwt-payload.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orders;
    constructor(orders: OrderService);
    create(user: AuthenticatedUser, dto: CreateOrderDto): Promise<{
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
            menuItemId: string;
            quantity: number;
            unitPriceMinor: number;
            unitPriceCurrency: string;
            selectedOptions: import("@prisma/client/runtime/client").JsonValue;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: import("../../database/generated/prisma/enums").OrderStatus;
        clientId: string;
        vendorId: string;
        driverId: string | null;
        paymentType: string;
        subtotalMinor: number;
        subtotalCurrency: string;
        deliveryFeeMinor: number;
        deliveryFeeCurrency: string;
        serviceFeeMinor: number;
        serviceFeeCurrency: string;
        taxMinor: number;
        taxCurrency: string;
        tipMinor: number;
        tipCurrency: string;
        totalMinor: number;
        totalCurrency: string;
        deliveryAddressSnapshot: import("@prisma/client/runtime/client").JsonValue;
        confirmedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
    }>;
    list(user: AuthenticatedUser): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<({
        vendor: {
            name: string;
            logoUrl: string | null;
        };
        items: ({
            menuItem: {
                name: string;
                imageUrl: string | null;
            };
        } & {
            id: string;
            menuItemId: string;
            quantity: number;
            unitPriceMinor: number;
            unitPriceCurrency: string;
            selectedOptions: import("@prisma/client/runtime/client").JsonValue;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: import("../../database/generated/prisma/enums").OrderStatus;
        clientId: string;
        vendorId: string;
        driverId: string | null;
        paymentType: string;
        subtotalMinor: number;
        subtotalCurrency: string;
        deliveryFeeMinor: number;
        deliveryFeeCurrency: string;
        serviceFeeMinor: number;
        serviceFeeCurrency: string;
        taxMinor: number;
        taxCurrency: string;
        tipMinor: number;
        tipCurrency: string;
        totalMinor: number;
        totalCurrency: string;
        deliveryAddressSnapshot: import("@prisma/client/runtime/client").JsonValue;
        confirmedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
    })[]>;
    getOne(user: AuthenticatedUser, id: string): Promise<{
        vendor: {
            name: string;
            address: string;
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
            menuItemId: string;
            quantity: number;
            unitPriceMinor: number;
            unitPriceCurrency: string;
            selectedOptions: import("@prisma/client/runtime/client").JsonValue;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: import("../../database/generated/prisma/enums").OrderStatus;
        clientId: string;
        vendorId: string;
        driverId: string | null;
        paymentType: string;
        subtotalMinor: number;
        subtotalCurrency: string;
        deliveryFeeMinor: number;
        deliveryFeeCurrency: string;
        serviceFeeMinor: number;
        serviceFeeCurrency: string;
        taxMinor: number;
        taxCurrency: string;
        tipMinor: number;
        tipCurrency: string;
        totalMinor: number;
        totalCurrency: string;
        deliveryAddressSnapshot: import("@prisma/client/runtime/client").JsonValue;
        confirmedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
    }>;
}

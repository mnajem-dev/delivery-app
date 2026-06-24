import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderStatus } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService {
    private readonly prisma;
    private readonly emitter;
    constructor(prisma: PrismaService, emitter: EventEmitter2);
    createOrder(clientId: string, dto: CreateOrderDto): Promise<{
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
        status: OrderStatus;
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
    listOrders(clientId: string): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        status: OrderStatus;
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
    getOrder(clientId: string, orderId: string): Promise<{
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
        status: OrderStatus;
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

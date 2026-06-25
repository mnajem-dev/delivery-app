import { Response } from 'express';
import { AdminService } from './admin.service';
import { ReportsService } from './reports.service';
export declare class AdminController {
    private readonly adminService;
    private readonly reportsService;
    constructor(adminService: AdminService, reportsService: ReportsService);
    getOrders(page?: number, limit?: number): Promise<{
        data: ({
            client: {
                user: {
                    id: string;
                    phone: string;
                    name: string;
                    email: string | null;
                };
            } & {
                userId: string;
            };
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
        })[];
        meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        };
    }>;
    getStats(): Promise<{
        totalOrders: number;
        totalUsers: number;
        totalVendors: number;
        totalRevenue: number;
        activeUsersCount: number;
        suspendedUsersCount: number;
        ordersByStatus: {
            CONFIRMED: number;
            PREPARING: number;
            PICKED_UP: number;
            ON_WAY: number;
            DELIVERED: number;
            CANCELLED: number;
        };
    }>;
    suspendUser(userId: string): Promise<{
        id: string;
        phone: string;
        name: string;
        email: string | null;
        status: import("../../database/generated/prisma/enums").StatusEnum;
    }>;
    getOrdersCsv(res: Response): Promise<string>;
    getStatsPdf(res: Response): Promise<void>;
}

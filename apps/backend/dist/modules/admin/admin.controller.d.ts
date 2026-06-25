import { Response } from 'express';
import { AdminService } from './admin.service';
import { ReportsService } from './reports.service';
export declare class AdminController {
    private readonly adminService;
    private readonly reportsService;
    constructor(adminService: AdminService, reportsService: ReportsService);
    getOrders(page?: number, limit?: number): {
        data: {
            id: string;
            customerName: string;
            status: string;
            amount: number;
            createdAt: string;
        }[];
        meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        };
    };
    getStats(): {
        totalOrders: number;
        totalRevenue: number;
        ordersByStatus: Record<string, number>;
        activeUsersCount: number;
        suspendedUsersCount: number;
    };
    suspendUser(userId: string): {
        message: string;
        user: {
            id: string;
            name: string;
            email: string;
            suspended: boolean;
        };
    };
    getOrdersCsv(res: Response): string;
    getStatsPdf(res: Response): Promise<void>;
}

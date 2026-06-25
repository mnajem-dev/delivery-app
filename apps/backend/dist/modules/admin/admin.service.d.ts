export declare class AdminService {
    private mockOrders;
    private mockUsers;
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
}

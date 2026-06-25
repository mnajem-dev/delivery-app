"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
let AdminService = class AdminService {
    constructor() {
        this.mockOrders = Array.from({ length: 50 }, (_, i) => ({
            id: `order-${i + 1}`,
            customerName: `Customer ${i + 1}`,
            status: i % 3 === 0 ? 'DELIVERED' : i % 3 === 1 ? 'PLACED' : 'ASSIGNED',
            amount: Math.floor(Math.random() * 100) + 10,
            createdAt: new Date(Date.now() - i * 3600000).toISOString(),
        }));
        this.mockUsers = [
            { id: 'user-1', name: 'John Doe', email: 'john@example.com', suspended: false },
            { id: 'user-2', name: 'Jane Smith', email: 'jane@example.com', suspended: false },
        ];
    }
    getOrders(page = 1, limit = 10) {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const data = this.mockOrders.slice(startIndex, endIndex);
        return {
            data,
            meta: {
                totalItems: this.mockOrders.length,
                itemCount: data.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(this.mockOrders.length / limit),
                currentPage: page,
            },
        };
    }
    getStats() {
        const totalOrders = this.mockOrders.length;
        const totalRevenue = this.mockOrders.reduce((sum, o) => sum + o.amount, 0);
        const ordersByStatus = this.mockOrders.reduce((acc, o) => {
            acc[o.status] = (acc[o.status] || 0) + 1;
            return acc;
        }, {});
        return {
            totalOrders,
            totalRevenue,
            ordersByStatus,
            activeUsersCount: this.mockUsers.filter(u => !u.suspended).length,
            suspendedUsersCount: this.mockUsers.filter(u => u.suspended).length,
        };
    }
    suspendUser(userId) {
        const user = this.mockUsers.find(u => u.id === userId);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        user.suspended = true;
        return {
            message: `User ${userId} has been suspended successfully`,
            user,
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)()
], AdminService);
//# sourceMappingURL=admin.service.js.map
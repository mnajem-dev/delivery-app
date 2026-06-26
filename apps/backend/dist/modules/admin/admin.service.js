"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const client_1 = require("../../database/generated/prisma/client");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrders(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.prisma.order.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    client: {
                        include: {
                            user: { select: { id: true, name: true, email: true, phone: true } },
                        },
                    },
                },
            }),
            this.prisma.order.count(),
        ]);
        return {
            data,
            meta: {
                totalItems: total,
                itemCount: data.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(total / limit),
                currentPage: page,
            },
        };
    }
    async getStats() {
        const [totalOrders, totalUsers, totalVendors, activeUsersCount, suspendedUsersCount, revenueAgg, confirmedCount, preparingCount, pickedUpCount, onWayCount, deliveredCount, cancelledCount,] = await Promise.all([
            this.prisma.order.count(),
            this.prisma.user.count(),
            this.prisma.vendor.count(),
            this.prisma.user.count({ where: { status: client_1.StatusEnum.ACTIVE } }),
            this.prisma.user.count({ where: { status: client_1.StatusEnum.SUSPENDED } }),
            this.prisma.order.aggregate({ _sum: { totalMinor: true } }),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.CONFIRMED } }),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.PREPARING } }),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.PICKED_UP } }),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.ON_WAY } }),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.DELIVERED } }),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.CANCELLED } }),
        ]);
        return {
            totalOrders,
            totalUsers,
            totalVendors,
            totalRevenue: revenueAgg._sum.totalMinor ?? 0,
            activeUsersCount,
            suspendedUsersCount,
            ordersByStatus: {
                [client_1.OrderStatus.CONFIRMED]: confirmedCount,
                [client_1.OrderStatus.PREPARING]: preparingCount,
                [client_1.OrderStatus.PICKED_UP]: pickedUpCount,
                [client_1.OrderStatus.ON_WAY]: onWayCount,
                [client_1.OrderStatus.DELIVERED]: deliveredCount,
                [client_1.OrderStatus.CANCELLED]: cancelledCount,
            },
        };
    }
    async suspendUser(userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        return this.prisma.user.update({
            where: { id: userId },
            data: { status: client_1.StatusEnum.SUSPENDED },
            select: { id: true, name: true, email: true, phone: true, status: true },
        });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map
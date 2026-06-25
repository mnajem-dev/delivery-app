import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { StatusEnum, OrderStatus } from '../../database/generated/prisma/client';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

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
    const [
      totalOrders,
      totalUsers,
      totalVendors,
      activeUsersCount,
      suspendedUsersCount,
      revenueAgg,
      confirmedCount,
      preparingCount,
      pickedUpCount,
      onWayCount,
      deliveredCount,
      cancelledCount,
    ] = await Promise.all([
      this.prisma.order.count(),
      this.prisma.user.count(),
      this.prisma.vendor.count(),
      this.prisma.user.count({ where: { status: StatusEnum.ACTIVE } }),
      this.prisma.user.count({ where: { status: StatusEnum.SUSPENDED } }),
      this.prisma.order.aggregate({ _sum: { totalMinor: true } }),
      this.prisma.order.count({ where: { status: OrderStatus.CONFIRMED } }),
      this.prisma.order.count({ where: { status: OrderStatus.PREPARING } }),
      this.prisma.order.count({ where: { status: OrderStatus.PICKED_UP } }),
      this.prisma.order.count({ where: { status: OrderStatus.ON_WAY } }),
      this.prisma.order.count({ where: { status: OrderStatus.DELIVERED } }),
      this.prisma.order.count({ where: { status: OrderStatus.CANCELLED } }),
    ]);

    return {
      totalOrders,
      totalUsers,
      totalVendors,
      totalRevenue: revenueAgg._sum.totalMinor ?? 0,
      activeUsersCount,
      suspendedUsersCount,
      ordersByStatus: {
        [OrderStatus.CONFIRMED]: confirmedCount,
        [OrderStatus.PREPARING]: preparingCount,
        [OrderStatus.PICKED_UP]: pickedUpCount,
        [OrderStatus.ON_WAY]: onWayCount,
        [OrderStatus.DELIVERED]: deliveredCount,
        [OrderStatus.CANCELLED]: cancelledCount,
      },
    };
  }

  async suspendUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: { status: StatusEnum.SUSPENDED },
      select: { id: true, name: true, email: true, phone: true, status: true },
    });
  }
}

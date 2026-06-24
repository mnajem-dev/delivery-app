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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
function sumCartTotal(items) {
    return items.reduce((acc, i) => acc + i.unitPriceMinor * i.quantity, 0);
}
let CartService = class CartService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCart(clientId) {
        const cart = await this.prisma.cart.findUnique({
            where: { clientId },
            include: {
                items: {
                    include: { menuItem: true },
                    orderBy: { menuItem: { name: 'asc' } },
                },
                vendor: {
                    select: { userId: true, name: true, logoUrl: true },
                },
            },
        });
        if (!cart)
            return { items: [], subtotalMinor: 0, currency: null };
        const subtotalMinor = sumCartTotal(cart.items);
        const currency = cart.items[0]?.unitPriceCurrency ?? null;
        return { ...cart, subtotalMinor, currency };
    }
    async addItem(clientId, dto) {
        const menuItem = await this.prisma.menuItem.findUnique({
            where: { id: dto.menuItemId },
        });
        if (!menuItem)
            throw new common_1.NotFoundException('Menu item not found');
        if (!menuItem.isAvailable)
            throw new common_1.ConflictException('Menu item is not available');
        const existingCart = await this.prisma.cart.findUnique({
            where: { clientId },
        });
        if (existingCart && existingCart.vendorId !== menuItem.vendorId) {
            throw new common_1.ConflictException('Cart already contains items from a different vendor. Clear the cart first.');
        }
        return this.prisma.$transaction(async (tx) => {
            const cart = await tx.cart.upsert({
                where: { clientId },
                create: { clientId, vendorId: menuItem.vendorId },
                update: {},
            });
            const existing = await tx.cartItem.findFirst({
                where: {
                    cartId: cart.id,
                    menuItemId: dto.menuItemId,
                },
            });
            if (existing) {
                return tx.cartItem.update({
                    where: { id: existing.id },
                    data: { quantity: existing.quantity + dto.quantity },
                    include: { menuItem: true },
                });
            }
            return tx.cartItem.create({
                data: {
                    cartId: cart.id,
                    menuItemId: dto.menuItemId,
                    quantity: dto.quantity,
                    unitPriceMinor: menuItem.priceMinor,
                    unitPriceCurrency: menuItem.priceCurrency,
                    selectedOptions: dto.options ?? {},
                },
                include: { menuItem: true },
            });
        });
    }
    async updateItem(clientId, cartItemId, dto) {
        const item = await this.assertOwnsCartItem(clientId, cartItemId);
        return this.prisma.cartItem.update({
            where: { id: item.id },
            data: { quantity: dto.quantity },
            include: { menuItem: true },
        });
    }
    async removeItem(clientId, cartItemId) {
        const item = await this.assertOwnsCartItem(clientId, cartItemId);
        await this.prisma.$transaction(async (tx) => {
            await tx.cartItem.delete({ where: { id: item.id } });
            const remaining = await tx.cartItem.count({
                where: { cartId: item.cartId },
            });
            if (remaining === 0) {
                await tx.cart.delete({ where: { id: item.cartId } });
            }
        });
    }
    async clearCart(clientId) {
        const cart = await this.prisma.cart.findUnique({ where: { clientId } });
        if (!cart)
            return;
        await this.prisma.$transaction([
            this.prisma.cartItem.deleteMany({ where: { cartId: cart.id } }),
            this.prisma.cart.delete({ where: { id: cart.id } }),
        ]);
    }
    async assertOwnsCartItem(clientId, cartItemId) {
        const cart = await this.prisma.cart.findUnique({ where: { clientId } });
        if (!cart)
            throw new common_1.NotFoundException('Cart not found');
        const item = await this.prisma.cartItem.findUnique({
            where: { id: cartItemId },
        });
        if (!item || item.cartId !== cart.id)
            throw new common_1.NotFoundException('Cart item not found');
        return item;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map
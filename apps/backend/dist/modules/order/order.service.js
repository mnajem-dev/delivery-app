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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const client_1 = require("../../database/generated/prisma/client");
const prisma_service_1 = require("../../database/prisma.service");
const events_1 = require("../../common/events/events");
const order_placed_event_1 = require("../../common/events/order-placed.event");
const PAYMENT_TYPE = 'CASH_ON_DELIVERY';
const ZERO_FEE = { minor: 0, currency: 'USD' };
function addMoney(...amounts) {
    return amounts.reduce((sum, a) => sum + a, 0);
}
let OrderService = class OrderService {
    constructor(prisma, emitter) {
        this.prisma = prisma;
        this.emitter = emitter;
    }
    async createOrder(clientId, dto) {
        const cart = await this.prisma.cart.findUnique({
            where: { clientId },
            include: {
                items: { include: { menuItem: true } },
            },
        });
        if (!cart || cart.items.length === 0) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        const address = await this.prisma.address.findUnique({
            where: { id: dto.deliveryAddressId },
        });
        if (!address)
            throw new common_1.NotFoundException('Delivery address not found');
        if (address.clientId !== clientId) {
            throw new common_1.ForbiddenException('Address does not belong to you');
        }
        const currency = cart.items[0].unitPriceCurrency;
        const subtotalMinor = cart.items.reduce((sum, i) => sum + i.unitPriceMinor * i.quantity, 0);
        const tipMinor = dto.tipMinor ?? 0;
        const totalMinor = addMoney(subtotalMinor, ZERO_FEE.minor, ZERO_FEE.minor, ZERO_FEE.minor, tipMinor);
        const addressSnapshot = {
            label: address.label,
            fullAddress: address.fullAddress,
            lat: address.lat,
            lng: address.lng,
        };
        const now = new Date();
        const order = await this.prisma.$transaction(async (tx) => {
            const created = await tx.order.create({
                data: {
                    clientId,
                    vendorId: cart.vendorId,
                    status: client_1.OrderStatus.CONFIRMED,
                    paymentType: PAYMENT_TYPE,
                    subtotalMinor,
                    subtotalCurrency: currency,
                    deliveryFeeMinor: ZERO_FEE.minor,
                    deliveryFeeCurrency: currency,
                    serviceFeeMinor: ZERO_FEE.minor,
                    serviceFeeCurrency: currency,
                    taxMinor: ZERO_FEE.minor,
                    taxCurrency: currency,
                    tipMinor,
                    tipCurrency: currency,
                    totalMinor,
                    totalCurrency: currency,
                    deliveryAddressSnapshot: addressSnapshot,
                    confirmedAt: now,
                    items: {
                        create: cart.items.map((i) => ({
                            menuItem: { connect: { id: i.menuItemId } },
                            quantity: i.quantity,
                            unitPriceMinor: i.unitPriceMinor,
                            unitPriceCurrency: i.unitPriceCurrency,
                            selectedOptions: i.selectedOptions ?? {},
                        })),
                    },
                },
                include: { items: { include: { menuItem: true } } },
            });
            await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
            await tx.cart.delete({ where: { id: cart.id } });
            return created;
        });
        this.emitter.emit(events_1.EVENTS.ORDER_PLACED, new order_placed_event_1.OrderPlacedEvent(order.id, clientId, cart.vendorId, totalMinor, currency));
        return order;
    }
    listOrders(clientId) {
        return this.prisma.order.findMany({
            where: { clientId },
            orderBy: { createdAt: 'desc' },
            include: {
                vendor: { select: { name: true, logoUrl: true } },
                items: { include: { menuItem: { select: { name: true, imageUrl: true } } } },
            },
        });
    }
    async getOrder(clientId, orderId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: {
                vendor: { select: { name: true, address: true, logoUrl: true } },
                items: { include: { menuItem: true } },
            },
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        if (order.clientId !== clientId) {
            throw new common_1.ForbiddenException('Order does not belong to you');
        }
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_emitter_1.EventEmitter2])
], OrderService);
//# sourceMappingURL=order.service.js.map
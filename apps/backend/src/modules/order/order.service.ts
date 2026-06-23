import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderStatus } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { EVENTS } from '../../common/events/events';
import { OrderPlacedEvent } from '../../common/events/order-placed.event';
import { CreateOrderDto } from './dto/create-order.dto';

const PAYMENT_TYPE = 'CASH_ON_DELIVERY';
const ZERO_FEE = { minor: 0, currency: 'USD' } as const;

type Money = number; // integer minor units (cents)

function addMoney(...amounts: Money[]): Money {
  return amounts.reduce((sum, a) => sum + a, 0);
}

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emitter: EventEmitter2,
  ) {}

  async createOrder(clientId: string, dto: CreateOrderDto) {
    // 1. Load cart with items
    const cart = await this.prisma.cart.findUnique({
      where: { clientId },
      include: {
        items: { include: { menuItem: true } },
      },
    });

    if (!cart || cart.items.length === 0) {
      throw new BadRequestException('Cart is empty');
    }

    // 2. Load and snapshot delivery address
    const address = await this.prisma.address.findUnique({
      where: { id: dto.deliveryAddressId },
    });

    if (!address) throw new NotFoundException('Delivery address not found');
    if (address.clientId !== clientId) {
      throw new ForbiddenException('Address does not belong to you');
    }

    // 3. Compute totals (all in same currency as cart items)
    const currency = cart.items[0].unitPriceCurrency;
    const subtotalMinor: Money = cart.items.reduce(
      (sum, i) => sum + i.unitPriceMinor * i.quantity,
      0,
    );
    const tipMinor: Money = dto.tipMinor ?? 0;
    const totalMinor: Money = addMoney(
      subtotalMinor,
      ZERO_FEE.minor, // deliveryFee
      ZERO_FEE.minor, // serviceFee
      ZERO_FEE.minor, // tax
      tipMinor,
    );

    const addressSnapshot = {
      label: address.label,
      fullAddress: address.fullAddress,
      lat: address.lat,
      lng: address.lng,
    };

    const now = new Date();

    // 4. Create order + items, then clear cart — all in one transaction
    const order = await this.prisma.$transaction(async (tx) => {
      const created = await tx.order.create({
        data: {
          clientId,
          vendorId: cart.vendorId,
          status: OrderStatus.CONFIRMED,
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

    // 5. Publish event — dispatch and notification must listen, never called directly
    this.emitter.emit(
      EVENTS.ORDER_PLACED,
      new OrderPlacedEvent(
        order.id,
        clientId,
        cart.vendorId,
        totalMinor,
        currency,
      ),
    );

    return order;
  }

  listOrders(clientId: string) {
    return this.prisma.order.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
      include: {
        vendor: { select: { name: true, logoUrl: true } },
        items: { include: { menuItem: { select: { name: true, imageUrl: true } } } },
      },
    });
  }

  async getOrder(clientId: string, orderId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        vendor: { select: { name: true, address: true, logoUrl: true } },
        items: { include: { menuItem: true } },
      },
    });

    if (!order) throw new NotFoundException('Order not found');
    if (order.clientId !== clientId) {
      throw new ForbiddenException('Order does not belong to you');
    }

    return order;
  }
}

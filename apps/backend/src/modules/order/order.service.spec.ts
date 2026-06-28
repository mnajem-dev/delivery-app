import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { OrderStatus } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { EVENTS } from '../../common/events/events';
import { OrderPlacedEvent } from '../../common/events/order-placed.event';
import { OrderService } from './order.service';

const CLIENT_ID = 'client-uuid';
const VENDOR_ID = 'vendor-uuid';
const ORDER_ID = 'order-uuid';
const ADDRESS_ID = 'address-uuid';
const CART_ID = 'cart-uuid';
const ITEM_ID = 'menu-item-uuid';

const mockAddress = {
  id: ADDRESS_ID,
  clientId: CLIENT_ID,
  label: 'Home',
  fullAddress: '1 Main St',
  lat: 48.85,
  lng: 2.35,
  isDefault: true,
};

const mockCartItem = {
  id: 'cart-item-uuid',
  cartId: CART_ID,
  menuItemId: ITEM_ID,
  quantity: 2,
  unitPriceMinor: 1200,
  unitPriceCurrency: 'USD',
  selectedOptions: {},
  menuItem: { id: ITEM_ID, name: 'Burger' },
};

const mockCart = {
  id: CART_ID,
  clientId: CLIENT_ID,
  vendorId: VENDOR_ID,
  createdAt: new Date(),
  items: [mockCartItem],
};

const mockOrder = {
  id: ORDER_ID,
  clientId: CLIENT_ID,
  vendorId: VENDOR_ID,
  status: OrderStatus.CONFIRMED,
  paymentType: 'CASH_ON_DELIVERY',
  subtotalMinor: 2400,
  subtotalCurrency: 'USD',
  deliveryFeeMinor: 0,
  deliveryFeeCurrency: 'USD',
  serviceFeeMinor: 0,
  serviceFeeCurrency: 'USD',
  taxMinor: 0,
  taxCurrency: 'USD',
  tipMinor: 0,
  tipCurrency: 'USD',
  totalMinor: 2400,
  totalCurrency: 'USD',
  deliveryAddressSnapshot: {},
  createdAt: new Date(),
  confirmedAt: new Date(),
  items: [],
};

const makePrisma = () => {
  const txMock = {
    order: { create: jest.fn().mockResolvedValue(mockOrder) },
    cartItem: { deleteMany: jest.fn().mockResolvedValue({}) },
    cart: { delete: jest.fn().mockResolvedValue({}) },
  };

  return {
    cart: { findUnique: jest.fn() },
    address: { findUnique: jest.fn() },
    order: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
    // order.service looks up the client's phone + device token to enrich OrderPlacedEvent
    user: { findUnique: jest.fn().mockResolvedValue({ phone: '+10000000000' }) },
    deviceToken: { findFirst: jest.fn().mockResolvedValue(null) },
    $transaction: jest.fn().mockImplementation(async (fn: (tx: typeof txMock) => Promise<unknown>) =>
      fn(txMock),
    ),
    _txMock: txMock,
  };
};

const makeEmitter = () => ({
  emit: jest.fn(),
});

describe('OrderService', () => {
  let service: OrderService;
  let prisma: ReturnType<typeof makePrisma>;
  let emitter: ReturnType<typeof makeEmitter>;

  beforeEach(async () => {
    prisma = makePrisma();
    emitter = makeEmitter();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: PrismaService, useValue: prisma },
        { provide: EventEmitter2, useValue: emitter },
      ],
    }).compile();

    service = module.get(OrderService);
  });

  // ── createOrder ────────────────────────────────────────────────────────────

  describe('createOrder', () => {
    const dto = { deliveryAddressId: ADDRESS_ID };

    beforeEach(() => {
      prisma.cart.findUnique.mockResolvedValue(mockCart);
      prisma.address.findUnique.mockResolvedValue(mockAddress);
    });

    it('creates order with CONFIRMED status and CASH_ON_DELIVERY', async () => {
      const result = await service.createOrder(CLIENT_ID, dto);

      expect(prisma._txMock.order.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            status: OrderStatus.CONFIRMED,
            paymentType: 'CASH_ON_DELIVERY',
          }),
        }),
      );
      expect(result.id).toBe(ORDER_ID);
    });

    it('computes subtotal as sum of unitPriceMinor × quantity', async () => {
      await service.createOrder(CLIENT_ID, dto);

      // 2 items × 1200 = 2400
      expect(prisma._txMock.order.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ subtotalMinor: 2400, totalMinor: 2400 }),
        }),
      );
    });

    it('adds tip to totalMinor', async () => {
      await service.createOrder(CLIENT_ID, { ...dto, tipMinor: 300 });

      expect(prisma._txMock.order.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ tipMinor: 300, totalMinor: 2700 }),
        }),
      );
    });

    it('clears cart inside transaction after creating order', async () => {
      await service.createOrder(CLIENT_ID, dto);

      expect(prisma._txMock.cartItem.deleteMany).toHaveBeenCalledWith({ where: { cartId: CART_ID } });
      expect(prisma._txMock.cart.delete).toHaveBeenCalledWith({ where: { id: CART_ID } });
    });

    it('emits OrderPlacedEvent after commit', async () => {
      await service.createOrder(CLIENT_ID, dto);

      expect(emitter.emit).toHaveBeenCalledWith(
        EVENTS.ORDER_PLACED,
        expect.any(OrderPlacedEvent),
      );
      const event: OrderPlacedEvent = emitter.emit.mock.calls[0][1];
      expect(event.orderId).toBe(ORDER_ID);
      expect(event.clientId).toBe(CLIENT_ID);
      expect(event.totalMinor).toBe(2400);
    });

    it('throws BadRequestException when cart is empty', async () => {
      prisma.cart.findUnique.mockResolvedValue({ ...mockCart, items: [] });

      await expect(service.createOrder(CLIENT_ID, dto)).rejects.toThrow(BadRequestException);
    });

    it('throws BadRequestException when cart does not exist', async () => {
      prisma.cart.findUnique.mockResolvedValue(null);

      await expect(service.createOrder(CLIENT_ID, dto)).rejects.toThrow(BadRequestException);
    });

    it('throws NotFoundException when address not found', async () => {
      prisma.address.findUnique.mockResolvedValue(null);

      await expect(service.createOrder(CLIENT_ID, dto)).rejects.toThrow(NotFoundException);
    });

    it('throws ForbiddenException when address belongs to another client', async () => {
      prisma.address.findUnique.mockResolvedValue({ ...mockAddress, clientId: 'other-client' });

      await expect(service.createOrder(CLIENT_ID, dto)).rejects.toThrow(ForbiddenException);
    });
  });

  // ── getOrder ───────────────────────────────────────────────────────────────

  describe('getOrder', () => {
    it('returns order when client owns it', async () => {
      prisma.order.findUnique.mockResolvedValue(mockOrder);

      const result = await service.getOrder(CLIENT_ID, ORDER_ID);

      expect(result.id).toBe(ORDER_ID);
    });

    it('throws NotFoundException when order not found', async () => {
      prisma.order.findUnique.mockResolvedValue(null);

      await expect(service.getOrder(CLIENT_ID, ORDER_ID)).rejects.toThrow(NotFoundException);
    });

    it('throws ForbiddenException when order belongs to another client', async () => {
      prisma.order.findUnique.mockResolvedValue({ ...mockOrder, clientId: 'other-client' });

      await expect(service.getOrder(CLIENT_ID, ORDER_ID)).rejects.toThrow(ForbiddenException);
    });
  });

  // ── listOrders ─────────────────────────────────────────────────────────────

  describe('listOrders', () => {
    it('returns all orders for the client ordered by createdAt desc', async () => {
      prisma.order.findMany.mockResolvedValue([mockOrder]);

      const result = await service.listOrders(CLIENT_ID);

      expect(prisma.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { clientId: CLIENT_ID },
          orderBy: { createdAt: 'desc' },
        }),
      );
      expect(result).toHaveLength(1);
    });
  });
});

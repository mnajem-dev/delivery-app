import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { AddCartItemDto } from '../dto/add-cart-item.dto';
import { UpdateCartItemDto } from '../dto/update-cart-item.dto';

type Money = number; // integer minor units (cents)

function sumCartTotal(
  items: { unitPriceMinor: Money; quantity: number }[],
): Money {
  return items.reduce((acc, i) => acc + i.unitPriceMinor * i.quantity, 0);
}

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async getCart(clientId: string) {
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

    if (!cart) return { items: [], subtotalMinor: 0, currency: null };

    const subtotalMinor = sumCartTotal(cart.items);
    const currency = cart.items[0]?.unitPriceCurrency ?? null;

    return { ...cart, subtotalMinor, currency };
  }

  async addItem(clientId: string, dto: AddCartItemDto) {
    const menuItem = await this.prisma.menuItem.findUnique({
      where: { id: dto.menuItemId },
    });

    if (!menuItem) throw new NotFoundException('Menu item not found');
    if (!menuItem.isAvailable)
      throw new ConflictException('Menu item is not available');

    const existingCart = await this.prisma.cart.findUnique({
      where: { clientId },
    });

    if (existingCart && existingCart.vendorId !== menuItem.vendorId) {
      throw new ConflictException(
        'Cart already contains items from a different vendor. Clear the cart first.',
      );
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
          selectedOptions: (dto.options as object) ?? {},
        },
        include: { menuItem: true },
      });
    });
  }

  async updateItem(clientId: string, cartItemId: string, dto: UpdateCartItemDto) {
    const item = await this.assertOwnsCartItem(clientId, cartItemId);

    return this.prisma.cartItem.update({
      where: { id: item.id },
      data: { quantity: dto.quantity },
      include: { menuItem: true },
    });
  }

  async removeItem(clientId: string, cartItemId: string) {
    const item = await this.assertOwnsCartItem(clientId, cartItemId);

    await this.prisma.$transaction(async (tx) => {
      await tx.cartItem.delete({ where: { id: item.id } });

      // Remove the cart itself when it becomes empty
      const remaining = await tx.cartItem.count({
        where: { cartId: item.cartId },
      });
      if (remaining === 0) {
        await tx.cart.delete({ where: { id: item.cartId } });
      }
    });
  }

  async clearCart(clientId: string) {
    const cart = await this.prisma.cart.findUnique({ where: { clientId } });
    if (!cart) return;

    await this.prisma.$transaction([
      this.prisma.cartItem.deleteMany({ where: { cartId: cart.id } }),
      this.prisma.cart.delete({ where: { id: cart.id } }),
    ]);
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────

  private async assertOwnsCartItem(clientId: string, cartItemId: string) {
    const cart = await this.prisma.cart.findUnique({ where: { clientId } });
    if (!cart) throw new NotFoundException('Cart not found');

    const item = await this.prisma.cartItem.findUnique({
      where: { id: cartItemId },
    });

    if (!item || item.cartId !== cart.id)
      throw new NotFoundException('Cart item not found');

    return item;
  }
}

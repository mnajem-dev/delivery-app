import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { StorageService } from './storage/storage.service';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { ListVendorsQueryDto } from './dto/list-vendors-query.dto';
import { StatusEnum } from '../../database/generated/prisma/client';

@Injectable()
export class CatalogService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
  ) {}

  // ── Vendors ────────────────────────────────────────────────────────────────

  listVendors(query: ListVendorsQueryDto) {
    return this.prisma.vendor.findMany({
      where: {
        user: { status: StatusEnum.ACTIVE },
        ...(query.isOpen !== undefined ? { isOpen: query.isOpen } : {}),
      },
      select: {
        userId: true,
        name: true,
        address: true,
        lat: true,
        lng: true,
        isOpen: true,
        rating: true,
        deliveryRadius: true,
        logoUrl: true,
      },
    });
  }

  async getVendor(vendorId: string) {
    const vendor = await this.prisma.vendor.findUnique({
      where: { userId: vendorId },
      include: {
        user: {
          select: { name: true, email: true, phone: true, status: true },
        },
        menuItems: {
          where: { isAvailable: true },
          orderBy: { category: 'asc' },
        },
      },
    });

    if (!vendor) throw new NotFoundException('Vendor not found');
    return vendor;
  }

  async updateVendor(vendorId: string, dto: UpdateVendorDto) {
    await this.assertVendorExists(vendorId);

    return this.prisma.vendor.update({
      where: { userId: vendorId },
      data: dto,
    });
  }

  async uploadVendorLogo(vendorId: string, file: Express.Multer.File) {
    const vendor = await this.assertVendorExists(vendorId);

    if (vendor.logoUrl) {
      await this.storage.delete(vendor.logoUrl);
    }

    const logoUrl = await this.storage.upload(file, 'vendors');

    return this.prisma.vendor.update({
      where: { userId: vendorId },
      data: { logoUrl },
    });
  }

  // ── Menu Items ──────────────────────────────────────────────────────────────

  listMenuItems(vendorId: string) {
    return this.prisma.menuItem.findMany({
      where: { vendorId },
      orderBy: [{ category: 'asc' }, { name: 'asc' }],
    });
  }

  async getMenuItem(itemId: string) {
    const item = await this.prisma.menuItem.findUnique({
      where: { id: itemId },
    });

    if (!item) throw new NotFoundException('Menu item not found');
    return item;
  }

  async createMenuItem(vendorId: string, dto: CreateMenuItemDto) {
    await this.assertVendorExists(vendorId);

    return this.prisma.menuItem.create({
      data: {
        vendorId,
        name: dto.name,
        priceMinor: dto.priceMinor,
        priceCurrency: dto.priceCurrency,
        category: dto.category,
        isAvailable: dto.isAvailable ?? true,
        options: (dto.options as object) ?? {},
      },
    });
  }

  async updateMenuItem(
    vendorId: string,
    itemId: string,
    dto: UpdateMenuItemDto,
  ) {
    await this.assertOwnsItem(vendorId, itemId);

    return this.prisma.menuItem.update({
      where: { id: itemId },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.priceMinor !== undefined && { priceMinor: dto.priceMinor }),
        ...(dto.priceCurrency !== undefined && {
          priceCurrency: dto.priceCurrency,
        }),
        ...(dto.category !== undefined && { category: dto.category }),
        ...(dto.isAvailable !== undefined && { isAvailable: dto.isAvailable }),
        ...(dto.options !== undefined && { options: dto.options as object }),
      },
    });
  }

  async deleteMenuItem(vendorId: string, itemId: string) {
    const item = await this.assertOwnsItem(vendorId, itemId);

    if (item.imageUrl) {
      await this.storage.delete(item.imageUrl);
    }

    await this.prisma.menuItem.delete({ where: { id: itemId } });
  }

  async uploadMenuItemImage(
    vendorId: string,
    itemId: string,
    file: Express.Multer.File,
  ) {
    const item = await this.assertOwnsItem(vendorId, itemId);

    if (item.imageUrl) {
      await this.storage.delete(item.imageUrl);
    }

    const imageUrl = await this.storage.upload(file, 'menu-items');

    return this.prisma.menuItem.update({
      where: { id: itemId },
      data: { imageUrl },
    });
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────

  private async assertVendorExists(vendorId: string) {
    const vendor = await this.prisma.vendor.findUnique({
      where: { userId: vendorId },
    });

    if (!vendor) throw new NotFoundException('Vendor not found');
    return vendor;
  }

  private async assertOwnsItem(vendorId: string, itemId: string) {
    const item = await this.prisma.menuItem.findUnique({
      where: { id: itemId },
    });

    if (!item) throw new NotFoundException('Menu item not found');
    if (item.vendorId !== vendorId)
      throw new ForbiddenException('Item does not belong to your store');

    return item;
  }
}

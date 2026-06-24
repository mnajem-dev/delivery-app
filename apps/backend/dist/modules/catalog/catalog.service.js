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
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const storage_service_1 = require("./storage/storage.service");
const client_1 = require("../../database/generated/prisma/client");
let CatalogService = class CatalogService {
    constructor(prisma, storage) {
        this.prisma = prisma;
        this.storage = storage;
    }
    listVendors(query) {
        return this.prisma.vendor.findMany({
            where: {
                user: { status: client_1.StatusEnum.ACTIVE },
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
    async getVendor(vendorId) {
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
        if (!vendor)
            throw new common_1.NotFoundException('Vendor not found');
        return vendor;
    }
    async updateVendor(vendorId, dto) {
        await this.assertVendorExists(vendorId);
        return this.prisma.vendor.update({
            where: { userId: vendorId },
            data: dto,
        });
    }
    async uploadVendorLogo(vendorId, file) {
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
    listMenuItems(vendorId) {
        return this.prisma.menuItem.findMany({
            where: { vendorId },
            orderBy: [{ category: 'asc' }, { name: 'asc' }],
        });
    }
    async getMenuItem(itemId) {
        const item = await this.prisma.menuItem.findUnique({
            where: { id: itemId },
        });
        if (!item)
            throw new common_1.NotFoundException('Menu item not found');
        return item;
    }
    async createMenuItem(vendorId, dto) {
        await this.assertVendorExists(vendorId);
        return this.prisma.menuItem.create({
            data: {
                vendorId,
                name: dto.name,
                priceMinor: dto.priceMinor,
                priceCurrency: dto.priceCurrency,
                category: dto.category,
                isAvailable: dto.isAvailable ?? true,
                options: dto.options ?? {},
            },
        });
    }
    async updateMenuItem(vendorId, itemId, dto) {
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
                ...(dto.options !== undefined && { options: dto.options }),
            },
        });
    }
    async deleteMenuItem(vendorId, itemId) {
        const item = await this.assertOwnsItem(vendorId, itemId);
        if (item.imageUrl) {
            await this.storage.delete(item.imageUrl);
        }
        await this.prisma.menuItem.delete({ where: { id: itemId } });
    }
    async uploadMenuItemImage(vendorId, itemId, file) {
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
    async assertVendorExists(vendorId) {
        const vendor = await this.prisma.vendor.findUnique({
            where: { userId: vendorId },
        });
        if (!vendor)
            throw new common_1.NotFoundException('Vendor not found');
        return vendor;
    }
    async assertOwnsItem(vendorId, itemId) {
        const item = await this.prisma.menuItem.findUnique({
            where: { id: itemId },
        });
        if (!item)
            throw new common_1.NotFoundException('Menu item not found');
        if (item.vendorId !== vendorId)
            throw new common_1.ForbiddenException('Item does not belong to your store');
        return item;
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map
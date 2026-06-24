import { PrismaService } from '../../database/prisma.service';
import { StorageService } from './storage/storage.service';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { ListVendorsQueryDto } from './dto/list-vendors-query.dto';
import { StatusEnum } from '../../database/generated/prisma/client';
export declare class CatalogService {
    private readonly prisma;
    private readonly storage;
    constructor(prisma: PrismaService, storage: StorageService);
    listVendors(query: ListVendorsQueryDto): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<{
        name: string;
        userId: string;
        address: string;
        lat: number;
        lng: number;
        isOpen: boolean;
        rating: number;
        deliveryRadius: number;
        logoUrl: string | null;
    }[]>;
    getVendor(vendorId: string): Promise<{
        user: {
            phone: string;
            name: string;
            email: string | null;
            status: StatusEnum;
        };
        menuItems: {
            id: string;
            name: string;
            vendorId: string;
            priceMinor: number;
            priceCurrency: string;
            category: string;
            imageUrl: string | null;
            isAvailable: boolean;
            options: import("@prisma/client/runtime/client").JsonValue;
        }[];
    } & {
        name: string;
        userId: string;
        address: string;
        lat: number;
        lng: number;
        isOpen: boolean;
        rating: number;
        deliveryRadius: number;
        commissionRate: number;
        logoUrl: string | null;
    }>;
    updateVendor(vendorId: string, dto: UpdateVendorDto): Promise<{
        name: string;
        userId: string;
        address: string;
        lat: number;
        lng: number;
        isOpen: boolean;
        rating: number;
        deliveryRadius: number;
        commissionRate: number;
        logoUrl: string | null;
    }>;
    uploadVendorLogo(vendorId: string, file: Express.Multer.File): Promise<{
        name: string;
        userId: string;
        address: string;
        lat: number;
        lng: number;
        isOpen: boolean;
        rating: number;
        deliveryRadius: number;
        commissionRate: number;
        logoUrl: string | null;
    }>;
    listMenuItems(vendorId: string): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        vendorId: string;
        priceMinor: number;
        priceCurrency: string;
        category: string;
        imageUrl: string | null;
        isAvailable: boolean;
        options: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    getMenuItem(itemId: string): Promise<{
        id: string;
        name: string;
        vendorId: string;
        priceMinor: number;
        priceCurrency: string;
        category: string;
        imageUrl: string | null;
        isAvailable: boolean;
        options: import("@prisma/client/runtime/client").JsonValue;
    }>;
    createMenuItem(vendorId: string, dto: CreateMenuItemDto): Promise<{
        id: string;
        name: string;
        vendorId: string;
        priceMinor: number;
        priceCurrency: string;
        category: string;
        imageUrl: string | null;
        isAvailable: boolean;
        options: import("@prisma/client/runtime/client").JsonValue;
    }>;
    updateMenuItem(vendorId: string, itemId: string, dto: UpdateMenuItemDto): Promise<{
        id: string;
        name: string;
        vendorId: string;
        priceMinor: number;
        priceCurrency: string;
        category: string;
        imageUrl: string | null;
        isAvailable: boolean;
        options: import("@prisma/client/runtime/client").JsonValue;
    }>;
    deleteMenuItem(vendorId: string, itemId: string): Promise<void>;
    uploadMenuItemImage(vendorId: string, itemId: string, file: Express.Multer.File): Promise<{
        id: string;
        name: string;
        vendorId: string;
        priceMinor: number;
        priceCurrency: string;
        category: string;
        imageUrl: string | null;
        isAvailable: boolean;
        options: import("@prisma/client/runtime/client").JsonValue;
    }>;
    private assertVendorExists;
    private assertOwnsItem;
}

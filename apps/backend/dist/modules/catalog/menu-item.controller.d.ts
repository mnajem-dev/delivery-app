import { AuthenticatedUser } from '../identity/interfaces/jwt-payload.interface';
import { CatalogService } from './catalog.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
export declare class MenuItemController {
    private readonly catalog;
    constructor(catalog: CatalogService);
    listItems(vendorId: string): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    createItem(user: AuthenticatedUser, dto: CreateMenuItemDto): Promise<{
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
    getItem(id: string): Promise<{
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
    updateItem(user: AuthenticatedUser, id: string, dto: UpdateMenuItemDto): Promise<{
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
    deleteItem(user: AuthenticatedUser, id: string): Promise<void>;
    uploadItemImage(user: AuthenticatedUser, id: string, file: Express.Multer.File): Promise<{
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
}

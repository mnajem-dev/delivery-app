import { AuthenticatedUser } from '../identity/interfaces/jwt-payload.interface';
import { CatalogService } from './catalog.service';
import { ListVendorsQueryDto } from './dto/list-vendors-query.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorController {
    private readonly catalog;
    constructor(catalog: CatalogService);
    list(query: ListVendorsQueryDto): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    getOne(id: string): Promise<{
        user: {
            phone: string;
            name: string;
            email: string | null;
            status: import("../../database/generated/prisma/enums").StatusEnum;
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
    updateMe(user: AuthenticatedUser, dto: UpdateVendorDto): Promise<{
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
    uploadLogo(user: AuthenticatedUser, file: Express.Multer.File): Promise<{
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
}

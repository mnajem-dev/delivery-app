import { ApiClient } from '../client';
import { CreateMenuItemDto, ListVendorsQuery, MenuItemDto, UpdateMenuItemDto, UpdateVendorDto, VendorDetailDto, VendorSummaryDto } from '@delivery-app/shared-types';
export interface CatalogApi {
    listVendors(query?: ListVendorsQuery): Promise<VendorSummaryDto[]>;
    getVendor(id: string): Promise<VendorDetailDto>;
    updateMyVendor(dto: UpdateVendorDto): Promise<VendorSummaryDto>;
    listMenuItems(vendorId: string): Promise<MenuItemDto[]>;
    getMenuItem(id: string): Promise<MenuItemDto>;
    createMenuItem(dto: CreateMenuItemDto): Promise<MenuItemDto>;
    updateMenuItem(id: string, dto: UpdateMenuItemDto): Promise<MenuItemDto>;
    deleteMenuItem(id: string): Promise<void>;
}
export declare function createCatalogEndpoints(client: ApiClient): CatalogApi;

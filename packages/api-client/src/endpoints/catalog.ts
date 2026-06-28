import { ApiClient } from '../client';
import {
  CreateMenuItemDto,
  ListVendorsQuery,
  MenuItemDto,
  UpdateMenuItemDto,
  UpdateVendorDto,
  VendorDetailDto,
  VendorSummaryDto,
} from '@delivery-app/shared-types';

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

function vendorQuery(q?: ListVendorsQuery): string {
  if (!q) return '';
  const p = new URLSearchParams();
  if (q.isOpen !== undefined) p.set('isOpen', String(q.isOpen));
  if (q.search) p.set('search', q.search);
  if (q.category) p.set('category', q.category);
  const s = p.toString();
  return s ? `?${s}` : '';
}

export function createCatalogEndpoints(client: ApiClient): CatalogApi {
  return {
    listVendors: (query) =>
      client.get<VendorSummaryDto[]>(`/catalog/vendors${vendorQuery(query)}`),
    getVendor: (id) => client.get<VendorDetailDto>(`/catalog/vendors/${id}`),
    updateMyVendor: (dto) =>
      client.patch<VendorSummaryDto>('/catalog/vendors/me', dto),
    listMenuItems: (vendorId) =>
      client.get<MenuItemDto[]>(`/catalog/vendors/${vendorId}/items`),
    getMenuItem: (id) => client.get<MenuItemDto>(`/catalog/items/${id}`),
    createMenuItem: (dto) =>
      client.post<MenuItemDto>('/catalog/vendors/me/items', dto),
    updateMenuItem: (id, dto) =>
      client.patch<MenuItemDto>(`/catalog/items/${id}`, dto),
    deleteMenuItem: (id) => client.delete(`/catalog/items/${id}`),
  };
}

import type { ListVendorsQuery } from '@delivery-app/shared-types';
import { getApi } from '../../lib/api';

export async function getRestaurants(token: string, query?: ListVendorsQuery) {
  return getApi(token).catalog.listVendors(query);
}

export async function getRestaurantDetails(token: string, vendorId: string) {
  return getApi(token).catalog.getVendor(vendorId);
}

export async function getRestaurantMenu(token: string, vendorId: string) {
  return getApi(token).catalog.listMenuItems(vendorId);
}

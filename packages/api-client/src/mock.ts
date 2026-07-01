import {
  AddressDto,
  AdminStatsDto,
  CartItemDto,
  RoleEnum,
  fixtureCart,
  fixtureEarnings,
  fixtureMenuItems,
  fixtureOrder,
  fixtureRideOffer,
  fixtureVendorDetail,
  fixtureVendors,
} from '@delivery-app/shared-types';
import { createApiClient } from './client';
import { Api } from './api';

const ok = <T>(value: T): Promise<T> => Promise.resolve(value);

/**
 * Offline mock of the whole API, backed by the shared fixtures. No network.
 * Lets a frontend intern build a screen before its backend endpoint exists:
 *
 *   const api = USE_MOCK ? createMockApiClient() : createApi(baseUrl, token);
 *   const vendors = await api.catalog.listVendors();
 */
export function createMockApiClient(): Api {
  let addresses: AddressDto[] = [
    {
      id: 'ad111111-1111-4111-8111-111111111111',
      clientId: '11111111-1111-4111-8111-111111111111',
      label: 'Home',
      fullAddress: '12 Main St',
      lat: 36.81,
      lng: 10.18,
      isDefault: true,
    },
  ];

  const stats: AdminStatsDto = {
    ordersToday: 23,
    revenueTodayMinor: 184500,
    currency: 'USD',
    activeOrders: 5,
    onlineDrivers: 3,
  };

  return {
    // `raw` is unused in mock mode but keeps parity with the real Api shape.
    raw: createApiClient('http://mock.local'),

    auth: {
      login: () =>
        ok({
          accessToken: 'mock-token',
          user: { id: '11111111-1111-4111-8111-111111111111', name: 'Maya Client', email: 'maya@example.com', role: RoleEnum.CLIENT },
        }),
      register: () =>
        ok({
          accessToken: 'mock-token',
          user: { id: '11111111-1111-4111-8111-111111111111', name: 'Maya Client', email: 'maya@example.com', role: RoleEnum.CLIENT },
        }),
      me: () =>
        ok({ id: '11111111-1111-4111-8111-111111111111', name: 'Maya Client', email: 'maya@example.com', role: RoleEnum.CLIENT }),
    },

    addresses: {
      list: () => ok(addresses),
      get: (id) => ok(addresses.find((a) => a.id === id) ?? addresses[0]),
      create: (dto) => {
        const created: AddressDto = {
          id: `mock-${addresses.length + 1}`,
          clientId: '11111111-1111-4111-8111-111111111111',
          isDefault: dto.isDefault ?? addresses.length === 0,
          label: dto.label,
          fullAddress: dto.fullAddress,
          lat: dto.lat,
          lng: dto.lng,
        };
        addresses = [...addresses, created];
        return ok(created);
      },
      update: (id, dto) => {
        addresses = addresses.map((a) => (a.id === id ? { ...a, ...dto } : a));
        return ok(addresses.find((a) => a.id === id) ?? addresses[0]);
      },
      setDefault: (id) => {
        addresses = addresses.map((a) => ({ ...a, isDefault: a.id === id }));
        return ok(addresses.find((a) => a.id === id) ?? addresses[0]);
      },
      remove: (id) => {
        addresses = addresses.filter((a) => a.id !== id);
        return ok(undefined);
      },
    },

    catalog: {
      listVendors: () => ok(fixtureVendors),
      getVendor: (id) => ok(fixtureVendorDetail(id)),
      updateMyVendor: () => ok(fixtureVendors[0]),
      listMenuItems: (vendorId) =>
        ok(fixtureMenuItems.filter((m) => m.vendorId === vendorId)),
      getMenuItem: (id) =>
        ok(fixtureMenuItems.find((m) => m.id === id) ?? fixtureMenuItems[0]),
      createMenuItem: () => ok(fixtureMenuItems[0]),
      updateMenuItem: () => ok(fixtureMenuItems[0]),
      deleteMenuItem: () => ok(undefined),
    },

    cart: {
  get: () => ok(fixtureCart),

  addItem: (dto) => {
    const menuItem = fixtureMenuItems.find((item) => item.id === dto.menuItemId);

    if (!menuItem) {
      return ok(fixtureCart.items[0] as CartItemDto);
    }

    const existing = fixtureCart.items.find(
      (item) => item.menuItemId === dto.menuItemId,
    );

    if (existing) {
      existing.quantity += dto.quantity;
      fixtureCart.subtotalMinor = fixtureCart.items.reduce(
        (sum, item) => sum + item.unitPriceMinor * item.quantity,
        0,
      );

      return ok(existing);
    }

    const newItem: CartItemDto = {
      id: `mock-cart-item-${Date.now()}`,
      menuItemId: menuItem.id,
      quantity: dto.quantity,
      unitPriceMinor: menuItem.priceMinor,
      unitPriceCurrency: menuItem.priceCurrency,
      selectedOptions: dto.options ?? {},
      menuItem: {
        name: menuItem.name,
        imageUrl: menuItem.imageUrl,
        priceMinor: menuItem.priceMinor,
        priceCurrency: menuItem.priceCurrency,
      },
    };

    fixtureCart.items.push(newItem);

    fixtureCart.subtotalMinor = fixtureCart.items.reduce(
      (sum, item) => sum + item.unitPriceMinor * item.quantity,
      0,
    );

    return ok(newItem);
  },

  updateItem: (itemId, dto) => {
    const item = fixtureCart.items.find((cartItem) => cartItem.id === itemId);

    if (!item) {
      return ok(fixtureCart.items[0] as CartItemDto);
    }

    item.quantity = dto.quantity;

    fixtureCart.subtotalMinor = fixtureCart.items.reduce(
      (sum, cartItem) => sum + cartItem.unitPriceMinor * cartItem.quantity,
      0,
    );

    return ok(item);
  },

  removeItem: (itemId) => {
    fixtureCart.items = fixtureCart.items.filter((item) => item.id !== itemId);

    fixtureCart.subtotalMinor = fixtureCart.items.reduce(
      (sum, cartItem) => sum + cartItem.unitPriceMinor * cartItem.quantity,
      0,
    );

    return ok(undefined);
  },

  clear: () => {
    fixtureCart.items = [];
    fixtureCart.subtotalMinor = 0;

    return ok(undefined);
  },
},

    orders: {
      create: () => ok(fixtureOrder),
      list: () => ok([fixtureOrder]),
      getById: () => ok(fixtureOrder),
    },

    drivers: {
      setStatus: (dto) => ok(dto),
      getEarnings: () => ok(fixtureEarnings),
      listOffers: () => ok([fixtureRideOffer]),
      acceptOffer: () => ok(undefined),
      updateDeliveryStatus: () => ok(fixtureOrder),
    },

    vendors: {
      listIncomingOrders: () => ok([fixtureOrder]),
      acceptOrder: () => ok(fixtureOrder),
    },

    admin: {
      stats: () => ok(stats),
      listOrders: () => ok([fixtureOrder]),
      suspendUser: () => ok(undefined),
    },

    ratings: {
      rateOrder: () => ok(undefined),
    },
  };
}

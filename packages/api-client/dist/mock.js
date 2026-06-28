"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMockApiClient = createMockApiClient;
const shared_types_1 = require("@delivery-app/shared-types");
const client_1 = require("./client");
const ok = (value) => Promise.resolve(value);
/**
 * Offline mock of the whole API, backed by the shared fixtures. No network.
 * Lets a frontend intern build a screen before its backend endpoint exists:
 *
 *   const api = USE_MOCK ? createMockApiClient() : createApi(baseUrl, token);
 *   const vendors = await api.catalog.listVendors();
 */
function createMockApiClient() {
    let addresses = [
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
    const stats = {
        ordersToday: 23,
        revenueTodayMinor: 184500,
        currency: 'USD',
        activeOrders: 5,
        onlineDrivers: 3,
    };
    return {
        // `raw` is unused in mock mode but keeps parity with the real Api shape.
        raw: (0, client_1.createApiClient)('http://mock.local'),
        auth: {
            login: () => ok({
                accessToken: 'mock-token',
                user: { id: '11111111-1111-4111-8111-111111111111', name: 'Maya Client', email: 'maya@example.com', role: shared_types_1.RoleEnum.CLIENT },
            }),
            register: () => ok({
                accessToken: 'mock-token',
                user: { id: '11111111-1111-4111-8111-111111111111', name: 'Maya Client', email: 'maya@example.com', role: shared_types_1.RoleEnum.CLIENT },
            }),
            me: () => ok({ id: '11111111-1111-4111-8111-111111111111', name: 'Maya Client', email: 'maya@example.com', role: shared_types_1.RoleEnum.CLIENT }),
        },
        addresses: {
            list: () => ok(addresses),
            get: (id) => ok(addresses.find((a) => a.id === id) ?? addresses[0]),
            create: (dto) => {
                const created = {
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
            listVendors: () => ok(shared_types_1.fixtureVendors),
            getVendor: (id) => ok((0, shared_types_1.fixtureVendorDetail)(id)),
            updateMyVendor: () => ok(shared_types_1.fixtureVendors[0]),
            listMenuItems: (vendorId) => ok(shared_types_1.fixtureMenuItems.filter((m) => m.vendorId === vendorId)),
            getMenuItem: (id) => ok(shared_types_1.fixtureMenuItems.find((m) => m.id === id) ?? shared_types_1.fixtureMenuItems[0]),
            createMenuItem: () => ok(shared_types_1.fixtureMenuItems[0]),
            updateMenuItem: () => ok(shared_types_1.fixtureMenuItems[0]),
            deleteMenuItem: () => ok(undefined),
        },
        cart: {
            get: () => ok(shared_types_1.fixtureCart),
            addItem: () => ok(shared_types_1.fixtureCart.items[0]),
            updateItem: () => ok(shared_types_1.fixtureCart.items[0]),
            removeItem: () => ok(undefined),
            clear: () => ok(undefined),
        },
        orders: {
            create: () => ok(shared_types_1.fixtureOrder),
            list: () => ok([shared_types_1.fixtureOrder]),
            getById: () => ok(shared_types_1.fixtureOrder),
        },
        drivers: {
            setStatus: (dto) => ok(dto),
            getEarnings: () => ok(shared_types_1.fixtureEarnings),
            listOffers: () => ok([shared_types_1.fixtureRideOffer]),
            acceptOffer: () => ok(undefined),
            updateDeliveryStatus: () => ok(shared_types_1.fixtureOrder),
        },
        vendors: {
            listIncomingOrders: () => ok([shared_types_1.fixtureOrder]),
            acceptOrder: () => ok(shared_types_1.fixtureOrder),
        },
        admin: {
            stats: () => ok(stats),
            listOrders: () => ok([shared_types_1.fixtureOrder]),
            suspendUser: () => ok(undefined),
        },
        ratings: {
            rateOrder: () => ok(undefined),
        },
    };
}

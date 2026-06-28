"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureDriverStatus = exports.fixtureEarnings = exports.fixtureRideOffer = exports.fixtureOrder = exports.fixtureCart = exports.fixtureMenuItems = exports.fixtureVendors = exports.FIXTURE_PASSWORD = exports.fixtureUsers = exports.FIXTURE_IDS = void 0;
exports.fixtureVendorDetail = fixtureVendorDetail;
const enums_1 = require("./enums");
const fees_1 = require("./fees");
/**
 * One canonical sample dataset, shared by:
 *  - the mock API client (packages/api-client/src/mock.ts) — so frontend interns
 *    build screens with no backend, and
 *  - the backend seed (apps/backend/src/database/seed/seed.ts) — so the running
 *    app has the SAME data.
 * Stable UUIDs let seed upserts be idempotent.
 */
exports.FIXTURE_IDS = {
    client: '11111111-1111-4111-8111-111111111111',
    driver: '22222222-2222-4222-8222-222222222222',
    vendor1: '33333333-3333-4333-8333-333333333333',
    vendor2: '44444444-4444-4444-8444-444444444444',
    admin: '55555555-5555-4555-8555-555555555555',
    order: '66666666-6666-4666-8666-666666666666',
};
exports.fixtureUsers = [
    { id: exports.FIXTURE_IDS.client, name: 'Maya Client', email: 'maya@example.com', phone: '+10000000001', role: enums_1.RoleEnum.CLIENT },
    { id: exports.FIXTURE_IDS.driver, name: 'Sam Driver', email: 'sam@example.com', phone: '+10000000002', role: enums_1.RoleEnum.DRIVER },
    { id: exports.FIXTURE_IDS.vendor1, name: 'Tariq Vendor', email: 'tariq@example.com', phone: '+10000000003', role: enums_1.RoleEnum.VENDOR },
    { id: exports.FIXTURE_IDS.vendor2, name: 'Nour Vendor', email: 'nour@example.com', phone: '+10000000004', role: enums_1.RoleEnum.VENDOR },
    { id: exports.FIXTURE_IDS.admin, name: 'Lena Admin', email: 'lena@example.com', phone: '+10000000005', role: enums_1.RoleEnum.ADMIN },
];
/** Default password for every seeded user (dev only). */
exports.FIXTURE_PASSWORD = 'password123';
exports.fixtureVendors = [
    {
        userId: exports.FIXTURE_IDS.vendor1,
        name: 'Burger Town',
        address: '12 Main St',
        lat: 36.8065,
        lng: 10.1815,
        isOpen: true,
        rating: 4.5,
        deliveryRadius: 5,
        logoUrl: null,
        etaMinutes: 25,
        deliveryFeeMinor: 250,
    },
    {
        userId: exports.FIXTURE_IDS.vendor2,
        name: 'Pizza Place',
        address: '8 Market Ave',
        lat: 36.81,
        lng: 10.18,
        isOpen: false,
        rating: 4.2,
        deliveryRadius: 4,
        logoUrl: null,
        etaMinutes: 35,
        deliveryFeeMinor: 300,
    },
];
exports.fixtureMenuItems = [
    { id: 'a1111111-1111-4111-8111-111111111111', vendorId: exports.FIXTURE_IDS.vendor1, name: 'Classic Burger', priceMinor: 850, priceCurrency: 'USD', category: 'Burgers', imageUrl: null, isAvailable: true, options: {} },
    { id: 'a2222222-2222-4222-8222-222222222222', vendorId: exports.FIXTURE_IDS.vendor1, name: 'Cheeseburger', priceMinor: 950, priceCurrency: 'USD', category: 'Burgers', imageUrl: null, isAvailable: true, options: {} },
    { id: 'a3333333-3333-4333-8333-333333333333', vendorId: exports.FIXTURE_IDS.vendor1, name: 'Fries', priceMinor: 350, priceCurrency: 'USD', category: 'Sides', imageUrl: null, isAvailable: true, options: {} },
    { id: 'b1111111-1111-4111-8111-111111111111', vendorId: exports.FIXTURE_IDS.vendor2, name: 'Margherita', priceMinor: 1100, priceCurrency: 'USD', category: 'Pizza', imageUrl: null, isAvailable: true, options: {} },
    { id: 'b2222222-2222-4222-8222-222222222222', vendorId: exports.FIXTURE_IDS.vendor2, name: 'Pepperoni', priceMinor: 1300, priceCurrency: 'USD', category: 'Pizza', imageUrl: null, isAvailable: true, options: {} },
    { id: 'b3333333-3333-4333-8333-333333333333', vendorId: exports.FIXTURE_IDS.vendor2, name: 'Garlic Bread', priceMinor: 400, priceCurrency: 'USD', category: 'Sides', imageUrl: null, isAvailable: false, options: {} },
];
function fixtureVendorDetail(vendorId) {
    const vendor = exports.fixtureVendors.find((v) => v.userId === vendorId) ?? exports.fixtureVendors[0];
    return {
        ...vendor,
        menuItems: exports.fixtureMenuItems.filter((m) => m.vendorId === vendor.userId),
    };
}
exports.fixtureCart = {
    id: 'c1111111-1111-4111-8111-111111111111',
    vendorId: exports.FIXTURE_IDS.vendor1,
    items: [
        {
            id: 'd1111111-1111-4111-8111-111111111111',
            menuItemId: exports.fixtureMenuItems[0].id,
            quantity: 2,
            unitPriceMinor: 850,
            unitPriceCurrency: 'USD',
            selectedOptions: {},
            menuItem: { name: 'Classic Burger', imageUrl: null, priceMinor: 850, priceCurrency: 'USD' },
        },
    ],
    subtotalMinor: 1700,
    currency: 'USD',
    vendor: { userId: exports.FIXTURE_IDS.vendor1, name: 'Burger Town', logoUrl: null },
};
const totals = (0, fees_1.computeOrderTotals)(1700, 200);
exports.fixtureOrder = {
    id: exports.FIXTURE_IDS.order,
    clientId: exports.FIXTURE_IDS.client,
    vendorId: exports.FIXTURE_IDS.vendor1,
    driverId: null,
    status: enums_1.OrderStatus.CONFIRMED,
    paymentType: 'CASH_ON_DELIVERY',
    subtotalMinor: totals.subtotalMinor,
    deliveryFeeMinor: totals.deliveryFeeMinor,
    serviceFeeMinor: totals.serviceFeeMinor,
    taxMinor: totals.taxMinor,
    tipMinor: totals.tipMinor,
    totalMinor: totals.totalMinor,
    currency: totals.currency,
    createdAt: '2026-01-01T12:00:00.000Z',
    vendor: { name: 'Burger Town', logoUrl: null },
    items: [
        {
            id: 'e1111111-1111-4111-8111-111111111111',
            menuItemId: exports.fixtureMenuItems[0].id,
            quantity: 2,
            unitPriceMinor: 850,
            unitPriceCurrency: 'USD',
            menuItem: { name: 'Classic Burger', imageUrl: null },
        },
    ],
};
exports.fixtureRideOffer = {
    id: 'f1111111-1111-4111-8111-111111111111',
    orderId: exports.FIXTURE_IDS.order,
    pickup: { name: 'Burger Town', lat: 36.8065, lng: 10.1815 },
    dropoff: { fullAddress: '12 Main St', lat: 36.81, lng: 10.18 },
    distanceKm: 3.2,
    payoutMinor: 450,
    currency: 'USD',
    expiresAt: '2026-01-01T12:00:30.000Z',
};
exports.fixtureEarnings = {
    totalEarningsMinor: 12500,
    cashCollectedMinor: 8000,
    cashDueMinor: 2000,
    currency: 'USD',
    deliveriesCount: 14,
};
exports.fixtureDriverStatus = enums_1.DriverStatus.OFFLINE;

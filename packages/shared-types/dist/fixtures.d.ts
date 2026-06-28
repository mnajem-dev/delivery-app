import { DriverStatus } from './enums';
import type { CartDto, EarningsDto, MenuItemDto, OrderDto, PublicUser, RideOfferDto, VendorDetailDto, VendorSummaryDto } from './dtos';
/**
 * One canonical sample dataset, shared by:
 *  - the mock API client (packages/api-client/src/mock.ts) — so frontend interns
 *    build screens with no backend, and
 *  - the backend seed (apps/backend/src/database/seed/seed.ts) — so the running
 *    app has the SAME data.
 * Stable UUIDs let seed upserts be idempotent.
 */
export declare const FIXTURE_IDS: {
    readonly client: "11111111-1111-4111-8111-111111111111";
    readonly driver: "22222222-2222-4222-8222-222222222222";
    readonly vendor1: "33333333-3333-4333-8333-333333333333";
    readonly vendor2: "44444444-4444-4444-8444-444444444444";
    readonly admin: "55555555-5555-4555-8555-555555555555";
    readonly order: "66666666-6666-4666-8666-666666666666";
};
export declare const fixtureUsers: (PublicUser & {
    phone: string;
})[];
/** Default password for every seeded user (dev only). */
export declare const FIXTURE_PASSWORD = "password123";
export declare const fixtureVendors: VendorSummaryDto[];
export declare const fixtureMenuItems: MenuItemDto[];
export declare function fixtureVendorDetail(vendorId: string): VendorDetailDto;
export declare const fixtureCart: CartDto;
export declare const fixtureOrder: OrderDto;
export declare const fixtureRideOffer: RideOfferDto;
export declare const fixtureEarnings: EarningsDto;
export declare const fixtureDriverStatus: DriverStatus;

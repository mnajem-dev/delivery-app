import { ApiClient } from '../client';
import { DriverStatusDto, EarningsDto, RideOfferDto, UpdateDeliveryStatusDto, OrderDto } from '@delivery-app/shared-types';
/**
 * Driver ops (US-601/602/604/605). PLANNED endpoints — not yet on the backend.
 * Shapes are the agreed contract; build against the mock client until they land.
 */
export interface DriversApi {
    setStatus(dto: DriverStatusDto): Promise<DriverStatusDto>;
    getEarnings(): Promise<EarningsDto>;
    listOffers(): Promise<RideOfferDto[]>;
    acceptOffer(offerId: string): Promise<void>;
    updateDeliveryStatus(orderId: string, dto: UpdateDeliveryStatusDto): Promise<OrderDto>;
}
export declare function createDriverEndpoints(client: ApiClient): DriversApi;

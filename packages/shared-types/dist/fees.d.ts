import { Money } from './money';
/**
 * Order fee configuration. Until US-803 (admin fee config) lands, the backend and
 * the frontend both use DEFAULT_FEES — so US-302 (order summary) and US-304 (place
 * order) are NOT blocked on US-803. When US-803 ships, it supplies an OrderFees
 * object to computeOrderTotals() instead of the default; nothing else changes.
 */
export interface OrderFees {
    deliveryFeeMinor: Money;
    serviceFeeMinor: Money;
    taxMinor: Money;
    currency: string;
}
export declare const DEFAULT_FEES: OrderFees;
export interface OrderTotals {
    subtotalMinor: Money;
    deliveryFeeMinor: Money;
    serviceFeeMinor: Money;
    taxMinor: Money;
    tipMinor: Money;
    totalMinor: Money;
    currency: string;
}
/** Single source of truth for order totals — used by the backend and the cart/checkout UI. */
export declare function computeOrderTotals(subtotalMinor: Money, tipMinor?: Money, fees?: OrderFees): OrderTotals;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_FEES = void 0;
exports.computeOrderTotals = computeOrderTotals;
exports.DEFAULT_FEES = {
    deliveryFeeMinor: 250, // 2.50
    serviceFeeMinor: 100, // 1.00
    taxMinor: 0,
    currency: 'USD',
};
/** Single source of truth for order totals — used by the backend and the cart/checkout UI. */
function computeOrderTotals(subtotalMinor, tipMinor = 0, fees = exports.DEFAULT_FEES) {
    const totalMinor = subtotalMinor +
        fees.deliveryFeeMinor +
        fees.serviceFeeMinor +
        fees.taxMinor +
        tipMinor;
    return {
        subtotalMinor,
        deliveryFeeMinor: fees.deliveryFeeMinor,
        serviceFeeMinor: fees.serviceFeeMinor,
        taxMinor: fees.taxMinor,
        tipMinor,
        totalMinor,
        currency: fees.currency,
    };
}

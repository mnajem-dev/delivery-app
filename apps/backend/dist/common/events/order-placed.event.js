"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPlacedEvent = void 0;
class OrderPlacedEvent {
    constructor(orderId, clientId, vendorId, totalMinor, totalCurrency) {
        this.orderId = orderId;
        this.clientId = clientId;
        this.vendorId = vendorId;
        this.totalMinor = totalMinor;
        this.totalCurrency = totalCurrency;
    }
}
exports.OrderPlacedEvent = OrderPlacedEvent;
//# sourceMappingURL=order-placed.event.js.map
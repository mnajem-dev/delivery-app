"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRatingsEndpoints = createRatingsEndpoints;
function createRatingsEndpoints(client) {
    return {
        rateOrder: (orderId, dto) => client.post(`/orders/${orderId}/rating`, dto),
    };
}

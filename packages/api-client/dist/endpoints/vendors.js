"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendorOpsEndpoints = createVendorOpsEndpoints;
function createVendorOpsEndpoints(client) {
    return {
        listIncomingOrders: () => client.get('/vendor/orders'),
        acceptOrder: (orderId, dto) => client.post(`/vendor/orders/${orderId}/accept`, dto),
    };
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDriverEndpoints = createDriverEndpoints;
function createDriverEndpoints(client) {
    return {
        setStatus: (dto) => client.patch('/drivers/me/status', dto),
        getEarnings: () => client.get('/drivers/me/earnings'),
        listOffers: () => client.get('/drivers/me/offers'),
        acceptOffer: (offerId) => client.post(`/drivers/me/offers/${offerId}/accept`, {}),
        updateDeliveryStatus: (orderId, dto) => client.patch(`/orders/${orderId}/delivery-status`, dto),
    };
}

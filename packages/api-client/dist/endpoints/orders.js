"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderEndpoints = createOrderEndpoints;
function createOrderEndpoints(client) {
    return {
        create: (body) => client.post('/orders', body),
        list: () => client.get('/orders'),
        getById: (id) => client.get(`/orders/${id}`),
    };
}

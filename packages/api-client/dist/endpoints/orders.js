"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderEndpoints = createOrderEndpoints;
function createOrderEndpoints(client) {
    return {
        create: (dto) => client.post('/orders', dto),
        list: () => client.get('/orders'),
        getById: (id) => client.get(`/orders/${id}`),
    };
}

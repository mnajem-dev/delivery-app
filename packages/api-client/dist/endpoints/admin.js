"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminEndpoints = createAdminEndpoints;
function createAdminEndpoints(client) {
    return {
        stats: () => client.get('/admin/stats'),
        listOrders: () => client.get('/admin/orders'),
        suspendUser: (userId) => client.post(`/admin/users/${userId}/suspend`, {}),
    };
}

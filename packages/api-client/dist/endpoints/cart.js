"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCartEndpoints = createCartEndpoints;
function createCartEndpoints(client) {
    return {
        get: () => client.get('/cart'),
        addItem: (dto) => client.post('/cart/items', dto),
        updateItem: (itemId, dto) => client.patch(`/cart/items/${itemId}`, dto),
        removeItem: (itemId) => client.delete(`/cart/items/${itemId}`),
        clear: () => client.delete('/cart'),
    };
}

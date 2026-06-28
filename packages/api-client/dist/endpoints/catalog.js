"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalogEndpoints = createCatalogEndpoints;
function vendorQuery(q) {
    if (!q)
        return '';
    const p = new URLSearchParams();
    if (q.isOpen !== undefined)
        p.set('isOpen', String(q.isOpen));
    if (q.search)
        p.set('search', q.search);
    if (q.category)
        p.set('category', q.category);
    const s = p.toString();
    return s ? `?${s}` : '';
}
function createCatalogEndpoints(client) {
    return {
        listVendors: (query) => client.get(`/catalog/vendors${vendorQuery(query)}`),
        getVendor: (id) => client.get(`/catalog/vendors/${id}`),
        updateMyVendor: (dto) => client.patch('/catalog/vendors/me', dto),
        listMenuItems: (vendorId) => client.get(`/catalog/vendors/${vendorId}/items`),
        getMenuItem: (id) => client.get(`/catalog/items/${id}`),
        createMenuItem: (dto) => client.post('/catalog/vendors/me/items', dto),
        updateMenuItem: (id, dto) => client.patch(`/catalog/items/${id}`, dto),
        deleteMenuItem: (id) => client.delete(`/catalog/items/${id}`),
    };
}

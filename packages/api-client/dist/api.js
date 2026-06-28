"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApi = createApi;
const client_1 = require("./client");
const admin_1 = require("./endpoints/admin");
const auth_1 = require("./endpoints/auth");
const cart_1 = require("./endpoints/cart");
const catalog_1 = require("./endpoints/catalog");
const drivers_1 = require("./endpoints/drivers");
const orders_1 = require("./endpoints/orders");
const ratings_1 = require("./endpoints/ratings");
const vendors_1 = require("./endpoints/vendors");
/** Real API bound to the backend. */
function createApi(baseUrl, token) {
    const client = (0, client_1.createApiClient)(baseUrl, token);
    return {
        raw: client,
        auth: (0, auth_1.createAuthEndpoints)(client),
        addresses: client.addresses,
        catalog: (0, catalog_1.createCatalogEndpoints)(client),
        cart: (0, cart_1.createCartEndpoints)(client),
        orders: (0, orders_1.createOrderEndpoints)(client),
        drivers: (0, drivers_1.createDriverEndpoints)(client),
        vendors: (0, vendors_1.createVendorOpsEndpoints)(client),
        admin: (0, admin_1.createAdminEndpoints)(client),
        ratings: (0, ratings_1.createRatingsEndpoints)(client),
    };
}

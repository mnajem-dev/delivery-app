"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRatingsEndpoints = exports.createAdminEndpoints = exports.createVendorOpsEndpoints = exports.createDriverEndpoints = exports.createCartEndpoints = exports.createCatalogEndpoints = exports.createOrderEndpoints = exports.createAuthEndpoints = exports.createMockApiClient = exports.createApi = exports.createApiClient = void 0;
// Low-level client (generic get/post/... + addresses namespace + withToken)
var client_1 = require("./client");
Object.defineProperty(exports, "createApiClient", { enumerable: true, get: function () { return client_1.createApiClient; } });
// One typed entry point for every domain + the offline mock.
var api_1 = require("./api");
Object.defineProperty(exports, "createApi", { enumerable: true, get: function () { return api_1.createApi; } });
var mock_1 = require("./mock");
Object.defineProperty(exports, "createMockApiClient", { enumerable: true, get: function () { return mock_1.createMockApiClient; } });
// Per-domain endpoint factories + their interfaces (for advanced use).
var auth_1 = require("./endpoints/auth");
Object.defineProperty(exports, "createAuthEndpoints", { enumerable: true, get: function () { return auth_1.createAuthEndpoints; } });
var orders_1 = require("./endpoints/orders");
Object.defineProperty(exports, "createOrderEndpoints", { enumerable: true, get: function () { return orders_1.createOrderEndpoints; } });
var catalog_1 = require("./endpoints/catalog");
Object.defineProperty(exports, "createCatalogEndpoints", { enumerable: true, get: function () { return catalog_1.createCatalogEndpoints; } });
var cart_1 = require("./endpoints/cart");
Object.defineProperty(exports, "createCartEndpoints", { enumerable: true, get: function () { return cart_1.createCartEndpoints; } });
var drivers_1 = require("./endpoints/drivers");
Object.defineProperty(exports, "createDriverEndpoints", { enumerable: true, get: function () { return drivers_1.createDriverEndpoints; } });
var vendors_1 = require("./endpoints/vendors");
Object.defineProperty(exports, "createVendorOpsEndpoints", { enumerable: true, get: function () { return vendors_1.createVendorOpsEndpoints; } });
var admin_1 = require("./endpoints/admin");
Object.defineProperty(exports, "createAdminEndpoints", { enumerable: true, get: function () { return admin_1.createAdminEndpoints; } });
var ratings_1 = require("./endpoints/ratings");
Object.defineProperty(exports, "createRatingsEndpoints", { enumerable: true, get: function () { return ratings_1.createRatingsEndpoints; } });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderEndpoints = exports.createAuthEndpoints = exports.createApiClient = void 0;
var client_1 = require("./client");
Object.defineProperty(exports, "createApiClient", { enumerable: true, get: function () { return client_1.createApiClient; } });
var auth_1 = require("./endpoints/auth");
Object.defineProperty(exports, "createAuthEndpoints", { enumerable: true, get: function () { return auth_1.createAuthEndpoints; } });
var orders_1 = require("./endpoints/orders");
Object.defineProperty(exports, "createOrderEndpoints", { enumerable: true, get: function () { return orders_1.createOrderEndpoints; } });

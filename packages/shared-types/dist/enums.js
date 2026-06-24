"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEnum = exports.DriverStatus = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CONFIRMED"] = "CONFIRMED";
    OrderStatus["PREPARING"] = "PREPARING";
    OrderStatus["PICKED_UP"] = "PICKED_UP";
    OrderStatus["ON_WAY"] = "ON_WAY";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var DriverStatus;
(function (DriverStatus) {
    DriverStatus["ONLINE"] = "ONLINE";
    DriverStatus["BUSY"] = "BUSY";
    DriverStatus["OFFLINE"] = "OFFLINE";
})(DriverStatus || (exports.DriverStatus = DriverStatus = {}));
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["CLIENT"] = "CLIENT";
    RoleEnum["DRIVER"] = "DRIVER";
    RoleEnum["VENDOR"] = "VENDOR";
    RoleEnum["ADMIN"] = "ADMIN";
})(RoleEnum || (exports.RoleEnum = RoleEnum = {}));

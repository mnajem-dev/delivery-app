"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEnum = exports.DriverStatus = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["CONFIRMED"] = "CONFIRMED";
    OrderStatus["PICKED_UP"] = "PICKED_UP";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var DriverStatus;
(function (DriverStatus) {
    DriverStatus["AVAILABLE"] = "AVAILABLE";
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

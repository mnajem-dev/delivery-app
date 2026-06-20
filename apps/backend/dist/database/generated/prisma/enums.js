"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifType = exports.DocStatus = exports.DocType = exports.DispatchStatus = exports.ApprovalEnum = exports.ReconStatus = exports.DriverStatus = exports.OrderStatus = exports.StatusEnum = exports.RoleEnum = void 0;
exports.RoleEnum = {
    CLIENT: 'CLIENT',
    DRIVER: 'DRIVER',
    VENDOR: 'VENDOR',
    ADMIN: 'ADMIN'
};
exports.StatusEnum = {
    ACTIVE: 'ACTIVE',
    PENDING: 'PENDING',
    SUSPENDED: 'SUSPENDED'
};
exports.OrderStatus = {
    CONFIRMED: 'CONFIRMED',
    PREPARING: 'PREPARING',
    PICKED_UP: 'PICKED_UP',
    ON_WAY: 'ON_WAY',
    DELIVERED: 'DELIVERED',
    CANCELLED: 'CANCELLED'
};
exports.DriverStatus = {
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE',
    BUSY: 'BUSY'
};
exports.ReconStatus = {
    OK: 'OK',
    DISPUTE: 'DISPUTE',
    RESOLVED: 'RESOLVED'
};
exports.ApprovalEnum = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    SUSPENDED: 'SUSPENDED'
};
exports.DispatchStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    EXPIRED: 'EXPIRED',
    REASSIGNED: 'REASSIGNED'
};
exports.DocType = {
    ID_CARD: 'ID_CARD',
    DRIVER_LICENSE: 'DRIVER_LICENSE',
    VEHICLE_REGISTRATION: 'VEHICLE_REGISTRATION'
};
exports.DocStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.NotifType = {
    ORDER_CONFIRMED: 'ORDER_CONFIRMED',
    ORDER_PREPARING: 'ORDER_PREPARING',
    DRIVER_ASSIGNED: 'DRIVER_ASSIGNED',
    ON_WAY: 'ON_WAY',
    ORDER_DELIVERED: 'ORDER_DELIVERED',
    CASH_DISCREPANCY: 'CASH_DISCREPANCY',
    ACCOUNT_UPDATE: 'ACCOUNT_UPDATE'
};
//# sourceMappingURL=enums.js.map
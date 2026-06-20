export declare const RoleEnum: {
    readonly CLIENT: "CLIENT";
    readonly DRIVER: "DRIVER";
    readonly VENDOR: "VENDOR";
    readonly ADMIN: "ADMIN";
};
export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum];
export declare const StatusEnum: {
    readonly ACTIVE: "ACTIVE";
    readonly PENDING: "PENDING";
    readonly SUSPENDED: "SUSPENDED";
};
export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum];
export declare const OrderStatus: {
    readonly CONFIRMED: "CONFIRMED";
    readonly PREPARING: "PREPARING";
    readonly PICKED_UP: "PICKED_UP";
    readonly ON_WAY: "ON_WAY";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const DriverStatus: {
    readonly ONLINE: "ONLINE";
    readonly OFFLINE: "OFFLINE";
    readonly BUSY: "BUSY";
};
export type DriverStatus = (typeof DriverStatus)[keyof typeof DriverStatus];
export declare const ReconStatus: {
    readonly OK: "OK";
    readonly DISPUTE: "DISPUTE";
    readonly RESOLVED: "RESOLVED";
};
export type ReconStatus = (typeof ReconStatus)[keyof typeof ReconStatus];
export declare const ApprovalEnum: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly SUSPENDED: "SUSPENDED";
};
export type ApprovalEnum = (typeof ApprovalEnum)[keyof typeof ApprovalEnum];
export declare const DispatchStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly EXPIRED: "EXPIRED";
    readonly REASSIGNED: "REASSIGNED";
};
export type DispatchStatus = (typeof DispatchStatus)[keyof typeof DispatchStatus];
export declare const DocType: {
    readonly ID_CARD: "ID_CARD";
    readonly DRIVER_LICENSE: "DRIVER_LICENSE";
    readonly VEHICLE_REGISTRATION: "VEHICLE_REGISTRATION";
};
export type DocType = (typeof DocType)[keyof typeof DocType];
export declare const DocStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type DocStatus = (typeof DocStatus)[keyof typeof DocStatus];
export declare const NotifType: {
    readonly ORDER_CONFIRMED: "ORDER_CONFIRMED";
    readonly ORDER_PREPARING: "ORDER_PREPARING";
    readonly DRIVER_ASSIGNED: "DRIVER_ASSIGNED";
    readonly ON_WAY: "ON_WAY";
    readonly ORDER_DELIVERED: "ORDER_DELIVERED";
    readonly CASH_DISCREPANCY: "CASH_DISCREPANCY";
    readonly ACCOUNT_UPDATE: "ACCOUNT_UPDATE";
};
export type NotifType = (typeof NotifType)[keyof typeof NotifType];

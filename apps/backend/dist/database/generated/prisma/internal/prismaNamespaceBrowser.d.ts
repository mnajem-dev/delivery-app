import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly OtpRequest: "OtpRequest";
    readonly User: "User";
    readonly Client: "Client";
    readonly Driver: "Driver";
    readonly Vendor: "Vendor";
    readonly Admin: "Admin";
    readonly Address: "Address";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly MenuItem: "MenuItem";
    readonly Dispatch: "Dispatch";
    readonly DispatchLog: "DispatchLog";
    readonly Rating: "Rating";
    readonly CashReconciliation: "CashReconciliation";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OtpRequestScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly phone: "phone";
    readonly attempts: "attempts";
    readonly blockedUntil: "blockedUntil";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type OtpRequestScalarFieldEnum = (typeof OtpRequestScalarFieldEnum)[keyof typeof OtpRequestScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ClientScalarFieldEnum: {
    readonly userId: "userId";
};
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];
export declare const DriverScalarFieldEnum: {
    readonly userId: "userId";
    readonly vehicleInfo: "vehicleInfo";
    readonly status: "status";
    readonly currentLat: "currentLat";
    readonly currentLng: "currentLng";
    readonly totalEarningsMinor: "totalEarningsMinor";
    readonly totalEarningsCurrency: "totalEarningsCurrency";
    readonly cashCollectedMinor: "cashCollectedMinor";
    readonly cashCollectedCurrency: "cashCollectedCurrency";
    readonly idDocUrl: "idDocUrl";
    readonly licenseDocUrl: "licenseDocUrl";
    readonly vehicleDocUrl: "vehicleDocUrl";
    readonly approvalStatus: "approvalStatus";
};
export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum];
export declare const VendorScalarFieldEnum: {
    readonly userId: "userId";
    readonly name: "name";
    readonly address: "address";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly isOpen: "isOpen";
    readonly rating: "rating";
    readonly deliveryRadius: "deliveryRadius";
    readonly commissionRate: "commissionRate";
    readonly logoUrl: "logoUrl";
};
export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum];
export declare const AdminScalarFieldEnum: {
    readonly userId: "userId";
    readonly department: "department";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const AddressScalarFieldEnum: {
    readonly id: "id";
    readonly clientId: "clientId";
    readonly label: "label";
    readonly fullAddress: "fullAddress";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly isDefault: "isDefault";
};
export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly clientId: "clientId";
    readonly vendorId: "vendorId";
    readonly createdAt: "createdAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly menuItemId: "menuItemId";
    readonly quantity: "quantity";
    readonly unitPriceMinor: "unitPriceMinor";
    readonly unitPriceCurrency: "unitPriceCurrency";
    readonly selectedOptions: "selectedOptions";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly clientId: "clientId";
    readonly vendorId: "vendorId";
    readonly driverId: "driverId";
    readonly status: "status";
    readonly paymentType: "paymentType";
    readonly subtotalMinor: "subtotalMinor";
    readonly subtotalCurrency: "subtotalCurrency";
    readonly deliveryFeeMinor: "deliveryFeeMinor";
    readonly deliveryFeeCurrency: "deliveryFeeCurrency";
    readonly serviceFeeMinor: "serviceFeeMinor";
    readonly serviceFeeCurrency: "serviceFeeCurrency";
    readonly taxMinor: "taxMinor";
    readonly taxCurrency: "taxCurrency";
    readonly tipMinor: "tipMinor";
    readonly tipCurrency: "tipCurrency";
    readonly totalMinor: "totalMinor";
    readonly totalCurrency: "totalCurrency";
    readonly deliveryAddressSnapshot: "deliveryAddressSnapshot";
    readonly createdAt: "createdAt";
    readonly confirmedAt: "confirmedAt";
    readonly pickedUpAt: "pickedUpAt";
    readonly deliveredAt: "deliveredAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly menuItemId: "menuItemId";
    readonly quantity: "quantity";
    readonly unitPriceMinor: "unitPriceMinor";
    readonly unitPriceCurrency: "unitPriceCurrency";
    readonly selectedOptions: "selectedOptions";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const MenuItemScalarFieldEnum: {
    readonly id: "id";
    readonly vendorId: "vendorId";
    readonly name: "name";
    readonly priceMinor: "priceMinor";
    readonly priceCurrency: "priceCurrency";
    readonly category: "category";
    readonly imageUrl: "imageUrl";
    readonly isAvailable: "isAvailable";
    readonly options: "options";
};
export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum];
export declare const DispatchScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly assignedDriverId: "assignedDriverId";
    readonly offeredAt: "offeredAt";
    readonly expiresAt: "expiresAt";
    readonly status: "status";
};
export type DispatchScalarFieldEnum = (typeof DispatchScalarFieldEnum)[keyof typeof DispatchScalarFieldEnum];
export declare const DispatchLogScalarFieldEnum: {
    readonly id: "id";
    readonly dispatchId: "dispatchId";
    readonly orderId: "orderId";
    readonly driverId: "driverId";
    readonly offeredAt: "offeredAt";
    readonly expiresAt: "expiresAt";
    readonly status: "status";
};
export type DispatchLogScalarFieldEnum = (typeof DispatchLogScalarFieldEnum)[keyof typeof DispatchLogScalarFieldEnum];
export declare const RatingScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly clientId: "clientId";
    readonly foodRating: "foodRating";
    readonly driverRating: "driverRating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum];
export declare const CashReconciliationScalarFieldEnum: {
    readonly id: "id";
    readonly driverId: "driverId";
    readonly orderId: "orderId";
    readonly expectedAmountMinor: "expectedAmountMinor";
    readonly expectedAmountCurrency: "expectedAmountCurrency";
    readonly collectedAmountMinor: "collectedAmountMinor";
    readonly collectedAmountCurrency: "collectedAmountCurrency";
    readonly discrepancyMinor: "discrepancyMinor";
    readonly discrepancyCurrency: "discrepancyCurrency";
    readonly status: "status";
    readonly resolvedBy: "resolvedBy";
};
export type CashReconciliationScalarFieldEnum = (typeof CashReconciliationScalarFieldEnum)[keyof typeof CashReconciliationScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly message: "message";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
    readonly targetRole: "targetRole";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

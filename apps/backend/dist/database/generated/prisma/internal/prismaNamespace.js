"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.NotificationScalarFieldEnum = exports.CashReconciliationScalarFieldEnum = exports.RatingScalarFieldEnum = exports.DispatchLogScalarFieldEnum = exports.DispatchScalarFieldEnum = exports.MenuItemScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.CartItemScalarFieldEnum = exports.CartScalarFieldEnum = exports.AddressScalarFieldEnum = exports.AdminScalarFieldEnum = exports.VendorScalarFieldEnum = exports.DriverScalarFieldEnum = exports.ClientScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Client: 'Client',
    Driver: 'Driver',
    Vendor: 'Vendor',
    Admin: 'Admin',
    Address: 'Address',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Order: 'Order',
    OrderItem: 'OrderItem',
    MenuItem: 'MenuItem',
    Dispatch: 'Dispatch',
    DispatchLog: 'DispatchLog',
    Rating: 'Rating',
    CashReconciliation: 'CashReconciliation',
    Notification: 'Notification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt'
};
exports.ClientScalarFieldEnum = {
    userId: 'userId'
};
exports.DriverScalarFieldEnum = {
    userId: 'userId',
    vehicleInfo: 'vehicleInfo',
    status: 'status',
    currentLat: 'currentLat',
    currentLng: 'currentLng',
    totalEarningsMinor: 'totalEarningsMinor',
    totalEarningsCurrency: 'totalEarningsCurrency',
    cashCollectedMinor: 'cashCollectedMinor',
    cashCollectedCurrency: 'cashCollectedCurrency',
    idDocUrl: 'idDocUrl',
    licenseDocUrl: 'licenseDocUrl',
    vehicleDocUrl: 'vehicleDocUrl',
    approvalStatus: 'approvalStatus'
};
exports.VendorScalarFieldEnum = {
    userId: 'userId',
    name: 'name',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    isOpen: 'isOpen',
    rating: 'rating',
    deliveryRadius: 'deliveryRadius',
    commissionRate: 'commissionRate'
};
exports.AdminScalarFieldEnum = {
    userId: 'userId',
    department: 'department'
};
exports.AddressScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    label: 'label',
    fullAddress: 'fullAddress',
    lat: 'lat',
    lng: 'lng',
    isDefault: 'isDefault'
};
exports.CartScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    vendorId: 'vendorId',
    createdAt: 'createdAt'
};
exports.CartItemScalarFieldEnum = {
    id: 'id',
    cartId: 'cartId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    unitPriceMinor: 'unitPriceMinor',
    unitPriceCurrency: 'unitPriceCurrency',
    selectedOptions: 'selectedOptions'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    vendorId: 'vendorId',
    driverId: 'driverId',
    status: 'status',
    paymentType: 'paymentType',
    subtotalMinor: 'subtotalMinor',
    subtotalCurrency: 'subtotalCurrency',
    deliveryFeeMinor: 'deliveryFeeMinor',
    deliveryFeeCurrency: 'deliveryFeeCurrency',
    serviceFeeMinor: 'serviceFeeMinor',
    serviceFeeCurrency: 'serviceFeeCurrency',
    taxMinor: 'taxMinor',
    taxCurrency: 'taxCurrency',
    tipMinor: 'tipMinor',
    tipCurrency: 'tipCurrency',
    totalMinor: 'totalMinor',
    totalCurrency: 'totalCurrency',
    deliveryAddressSnapshot: 'deliveryAddressSnapshot',
    createdAt: 'createdAt',
    confirmedAt: 'confirmedAt',
    pickedUpAt: 'pickedUpAt',
    deliveredAt: 'deliveredAt'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    unitPriceMinor: 'unitPriceMinor',
    unitPriceCurrency: 'unitPriceCurrency',
    selectedOptions: 'selectedOptions'
};
exports.MenuItemScalarFieldEnum = {
    id: 'id',
    vendorId: 'vendorId',
    name: 'name',
    priceMinor: 'priceMinor',
    priceCurrency: 'priceCurrency',
    category: 'category',
    imageUrl: 'imageUrl',
    isAvailable: 'isAvailable',
    options: 'options'
};
exports.DispatchScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    assignedDriverId: 'assignedDriverId',
    offeredAt: 'offeredAt',
    expiresAt: 'expiresAt',
    status: 'status'
};
exports.DispatchLogScalarFieldEnum = {
    id: 'id',
    dispatchId: 'dispatchId',
    orderId: 'orderId',
    driverId: 'driverId',
    offeredAt: 'offeredAt',
    expiresAt: 'expiresAt',
    status: 'status'
};
exports.RatingScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    clientId: 'clientId',
    foodRating: 'foodRating',
    driverRating: 'driverRating',
    comment: 'comment',
    createdAt: 'createdAt'
};
exports.CashReconciliationScalarFieldEnum = {
    id: 'id',
    driverId: 'driverId',
    orderId: 'orderId',
    expectedAmountMinor: 'expectedAmountMinor',
    expectedAmountCurrency: 'expectedAmountCurrency',
    collectedAmountMinor: 'collectedAmountMinor',
    collectedAmountCurrency: 'collectedAmountCurrency',
    discrepancyMinor: 'discrepancyMinor',
    discrepancyCurrency: 'discrepancyCurrency',
    status: 'status',
    resolvedBy: 'resolvedBy'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    targetRole: 'targetRole'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
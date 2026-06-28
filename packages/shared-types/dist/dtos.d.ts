import { DriverStatus, OrderStatus, RoleEnum } from './enums';
export interface LoginDto {
    email: string;
    password: string;
}
export interface RegisterDto {
    name: string;
    email: string;
    phone: string;
    role: RoleEnum;
    password: string;
    vendorName?: string;
    address?: string;
    lat?: number;
    lng?: number;
    department?: string;
}
export interface PublicUser {
    id: string;
    name: string;
    email: string;
    phone?: string;
    role: RoleEnum;
    status?: string;
    createdAt?: string;
}
export interface AuthResponse {
    accessToken: string;
    user: Pick<PublicUser, 'id' | 'name' | 'email' | 'role'>;
}
export interface AddressDto {
    id: string;
    clientId: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
}
export interface CreateAddressDto {
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault?: boolean;
}
export interface UpdateAddressDto {
    label?: string;
    fullAddress?: string;
    lat?: number;
    lng?: number;
}
export interface VendorSummaryDto {
    userId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    logoUrl: string | null;
    /** Populated once US-201 geo lands; optional until then. */
    etaMinutes?: number;
    deliveryFeeMinor?: number;
}
export interface MenuItemDto {
    id: string;
    vendorId: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl: string | null;
    isAvailable: boolean;
    options: unknown;
}
export interface VendorDetailDto extends VendorSummaryDto {
    menuItems: MenuItemDto[];
}
export interface ListVendorsQuery {
    isOpen?: boolean;
    /** Reserved for US-202 search/filters. */
    search?: string;
    category?: string;
}
export interface CreateMenuItemDto {
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    isAvailable?: boolean;
    options?: unknown;
}
export interface UpdateMenuItemDto {
    name?: string;
    priceMinor?: number;
    priceCurrency?: string;
    category?: string;
    isAvailable?: boolean;
    options?: unknown;
}
export interface UpdateVendorDto {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
    isOpen?: boolean;
    deliveryRadius?: number;
}
export interface CartItemDto {
    id: string;
    menuItemId: string;
    quantity: number;
    unitPriceMinor: number;
    unitPriceCurrency: string;
    selectedOptions: unknown;
    menuItem?: Pick<MenuItemDto, 'name' | 'imageUrl' | 'priceMinor' | 'priceCurrency'>;
}
export interface CartDto {
    id?: string;
    vendorId?: string;
    items: CartItemDto[];
    subtotalMinor: number;
    currency: string | null;
    vendor?: Pick<VendorSummaryDto, 'userId' | 'name' | 'logoUrl'>;
}
export interface AddCartItemDto {
    menuItemId: string;
    quantity: number;
    options?: unknown;
}
export interface UpdateCartItemDto {
    quantity: number;
}
export interface OrderItemDto {
    id: string;
    menuItemId: string;
    quantity: number;
    unitPriceMinor: number;
    unitPriceCurrency: string;
    menuItem?: {
        name: string;
        imageUrl: string | null;
    };
}
export interface OrderDto {
    id: string;
    clientId: string;
    vendorId: string;
    driverId?: string | null;
    status: OrderStatus;
    paymentType: string;
    subtotalMinor: number;
    deliveryFeeMinor: number;
    serviceFeeMinor: number;
    taxMinor: number;
    tipMinor: number;
    totalMinor: number;
    currency: string;
    createdAt: string;
    vendor?: Pick<VendorSummaryDto, 'name' | 'logoUrl'>;
    items: OrderItemDto[];
}
export interface CreateOrderDto {
    deliveryAddressId: string;
    tipMinor?: number;
}
export interface DriverStatusDto {
    status: DriverStatus;
}
export interface RideOfferDto {
    id: string;
    orderId: string;
    pickup: {
        name: string;
        lat: number;
        lng: number;
    };
    dropoff: {
        fullAddress: string;
        lat: number;
        lng: number;
    };
    distanceKm: number;
    payoutMinor: number;
    currency: string;
    expiresAt: string;
}
export interface EarningsDto {
    totalEarningsMinor: number;
    cashCollectedMinor: number;
    cashDueMinor: number;
    currency: string;
    deliveriesCount: number;
}
/** Driver marks pickup/delivery; confirms cash collected on delivery (US-604). */
export interface UpdateDeliveryStatusDto {
    status: OrderStatus;
    cashCollectedMinor?: number;
}
export interface AcceptOrderDto {
    prepMinutes: number;
}
export interface CreateRatingDto {
    foodRating: number;
    driverRating: number;
    comment?: string;
}
export interface AdminStatsDto {
    ordersToday: number;
    revenueTodayMinor: number;
    currency: string;
    activeOrders: number;
    onlineDrivers: number;
}
export interface NotificationDto {
    id: string;
    type: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

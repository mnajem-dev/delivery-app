export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PICKED_UP = 'PICKED_UP',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum DriverStatus {
  AVAILABLE = 'AVAILABLE',
  BUSY = 'BUSY',
  OFFLINE = 'OFFLINE',
}

export enum RoleEnum {
  CLIENT = 'CLIENT',
  DRIVER = 'DRIVER',
  VENDOR = 'VENDOR',
  ADMIN = 'ADMIN',
}

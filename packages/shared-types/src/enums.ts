export enum OrderStatus {
  CONFIRMED = 'CONFIRMED',
  PREPARING = 'PREPARING',
  PICKED_UP = 'PICKED_UP',
  ON_WAY = 'ON_WAY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum DriverStatus {
  ONLINE = 'ONLINE',
  BUSY = 'BUSY',
  OFFLINE = 'OFFLINE',
}

export enum RoleEnum {
  CLIENT = 'CLIENT',
  DRIVER = 'DRIVER',
  VENDOR = 'VENDOR',
  ADMIN = 'ADMIN',
}

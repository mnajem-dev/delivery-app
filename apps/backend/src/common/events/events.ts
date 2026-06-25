export const EVENTS = {
  ORDER_PLACED: 'order.placed',
  DRIVER_ASSIGNED: 'driver.assigned',
  ORDER_DELIVERED: 'order.delivered',
} as const;

export const ORDER_PLACED = EVENTS.ORDER_PLACED;
export const DRIVER_ASSIGNED = EVENTS.DRIVER_ASSIGNED;
export const ORDER_DELIVERED = EVENTS.ORDER_DELIVERED;

export type TrackingEvent = {
  orderId: string;
  status: string;
  driverLat?: number;
  driverLng?: number;
};

export function createTrackingSocket(orderId: string) {
  const socketUrl = `ws://localhost:3000/tracking?orderId=${orderId}`;
  return new WebSocket(socketUrl);
}

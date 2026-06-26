export class OrderPlacedEvent {
  constructor(
    public readonly orderId: string,
    public readonly clientId: string,
    public readonly vendorId: string,
    public readonly totalMinor: number,
    public readonly totalCurrency: string,
    public readonly customerPhone?: string,
    public readonly fcmToken?: string,
  ) {}
}

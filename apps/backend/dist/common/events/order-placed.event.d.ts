export declare class OrderPlacedEvent {
    readonly orderId: string;
    readonly clientId: string;
    readonly vendorId: string;
    readonly totalMinor: number;
    readonly totalCurrency: string;
    readonly customerPhone?: string | undefined;
    readonly fcmToken?: string | undefined;
    constructor(orderId: string, clientId: string, vendorId: string, totalMinor: number, totalCurrency: string, customerPhone?: string | undefined, fcmToken?: string | undefined);
}

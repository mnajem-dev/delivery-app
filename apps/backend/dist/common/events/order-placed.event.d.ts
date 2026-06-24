export declare class OrderPlacedEvent {
    readonly orderId: string;
    readonly clientId: string;
    readonly vendorId: string;
    readonly totalMinor: number;
    readonly totalCurrency: string;
    constructor(orderId: string, clientId: string, vendorId: string, totalMinor: number, totalCurrency: string);
}

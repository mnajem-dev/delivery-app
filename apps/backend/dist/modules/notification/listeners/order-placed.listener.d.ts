import { OrderPlacedEvent } from '../../../common/events/order-placed.event';
export declare class OrderPlacedListener {
    private readonly logger;
    handle(event: OrderPlacedEvent): void;
}

import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EVENTS } from '../../../common/events/events';
import { OrderPlacedEvent } from '../../../common/events/order-placed.event';

@Injectable()
export class OrderPlacedListener {
  private readonly logger = new Logger(OrderPlacedListener.name);

  @OnEvent(EVENTS.ORDER_PLACED)
  handle(event: OrderPlacedEvent): void {
    // TODO: find nearby drivers and create a Dispatch offer
    this.logger.log(`[dispatch] OrderPlaced received — orderId=${event.orderId}`);
  }
}

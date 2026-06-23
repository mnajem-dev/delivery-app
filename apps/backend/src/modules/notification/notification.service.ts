import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  ORDER_PLACED,
  DRIVER_ASSIGNED,
  ORDER_DELIVERED,
} from '../../common/events/events';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  @OnEvent(ORDER_PLACED)
  handleOrderPlacedEvent(payload: any) {
    this.logger.log(`Event received: ${ORDER_PLACED}`, payload);
  }

  @OnEvent(DRIVER_ASSIGNED)
  handleDriverAssignedEvent(payload: any) {
    this.logger.log(`Event received: ${DRIVER_ASSIGNED}`, payload);
  }

  @OnEvent(ORDER_DELIVERED)
  handleOrderDeliveredEvent(payload: any) {
    this.logger.log(`Event received: ${ORDER_DELIVERED}`, payload);
  }
}

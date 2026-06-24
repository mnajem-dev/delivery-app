import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  ORDER_PLACED,
  DRIVER_ASSIGNED,
  ORDER_DELIVERED,
} from '../../common/events/events';
import { FcmService } from './fcm.service';
import { WhatsappService } from './whatsapp.service';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly fcmService: FcmService,
    private readonly whatsappService: WhatsappService,
  ) {}

  @OnEvent(ORDER_PLACED)
  async handleOrderPlacedEvent(payload: any) {
    this.logger.log(`Event received: ${ORDER_PLACED}`, payload);
    const { orderId, customerPhone, fcmToken } = payload || {};

    if (fcmToken) {
      await this.fcmService
        .sendPushNotification(
          fcmToken,
          'Order Placed',
          `Your order ${orderId ? '#' + orderId : ''} has been successfully placed.`,
          { orderId: orderId ? String(orderId) : '' },
        )
        .catch((e) => this.logger.error('Failed to send FCM', e));
    }

    if (customerPhone) {
      await this.whatsappService
        .sendTextMessage(
          customerPhone,
          `Your order ${orderId ? '#' + orderId : ''} has been successfully placed.`,
        )
        .catch((e) => this.logger.error('Failed to send WhatsApp', e));
    }
  }

  @OnEvent(DRIVER_ASSIGNED)
  async handleDriverAssignedEvent(payload: any) {
    this.logger.log(`Event received: ${DRIVER_ASSIGNED}`, payload);
    const { orderId, driverName, customerPhone, fcmToken, driverPhone, driverFcmToken } = payload || {};

    if (fcmToken) {
      await this.fcmService
        .sendPushNotification(
          fcmToken,
          'Driver Assigned',
          `Driver ${driverName || 'assigned'} is on the way for your order ${orderId ? '#' + orderId : ''}.`,
          { orderId: orderId ? String(orderId) : '' },
        )
        .catch((e) => this.logger.error('Failed to send FCM to customer', e));
    }

    if (customerPhone) {
      await this.whatsappService
        .sendTextMessage(
          customerPhone,
          `Driver ${driverName || 'assigned'} is on the way for your order ${orderId ? '#' + orderId : ''}.`,
        )
        .catch((e) => this.logger.error('Failed to send WhatsApp to customer', e));
    }

    if (driverFcmToken) {
      await this.fcmService
        .sendPushNotification(
          driverFcmToken,
          'New Order Assigned',
          `You have been assigned to order ${orderId ? '#' + orderId : ''}.`,
          { orderId: orderId ? String(orderId) : '' },
        )
        .catch((e) => this.logger.error('Failed to send FCM to driver', e));
    }

    if (driverPhone) {
      await this.whatsappService
        .sendTextMessage(
          driverPhone,
          `You have been assigned to order ${orderId ? '#' + orderId : ''}.`,
        )
        .catch((e) => this.logger.error('Failed to send WhatsApp to driver', e));
    }
  }

  @OnEvent(ORDER_DELIVERED)
  async handleOrderDeliveredEvent(payload: any) {
    this.logger.log(`Event received: ${ORDER_DELIVERED}`, payload);
    const { orderId, customerPhone, phoneNumber, fcmToken, deviceToken } = payload || {};

    const targetToken = deviceToken || fcmToken;
    const targetPhone = phoneNumber || customerPhone;

    if (targetToken) {
      await this.fcmService
        .sendPushNotification(
          targetToken,
          'Order Delivered',
          `Your order ${orderId ? '#' + orderId : ''} has been delivered. Enjoy!`,
          { orderId: orderId ? String(orderId) : '' },
        )
        .catch((e) => this.logger.error('Failed to send FCM', e));
    }

    if (targetPhone) {
      await this.whatsappService
        .sendTextMessage(
          targetPhone,
          `Your order ${orderId ? '#' + orderId : ''} has been delivered. Enjoy!`,
        )
        .catch((e) => this.logger.error('Failed to send WhatsApp', e));
    }
  }
}

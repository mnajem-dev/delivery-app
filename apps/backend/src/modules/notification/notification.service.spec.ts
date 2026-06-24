import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';
import { Logger } from '@nestjs/common';
import {
  ORDER_PLACED,
  DRIVER_ASSIGNED,
  ORDER_DELIVERED,
} from '../../common/events/events';
import { FcmService } from './fcm.service';
import { WhatsappService } from './whatsapp.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let loggerLogSpy: jest.SpyInstance;

  beforeEach(async () => {
    const mockFcmService = {
      sendPushNotification: jest.fn().mockResolvedValue('ok'),
    };
    const mockWhatsappService = {
      sendTextMessage: jest.fn().mockResolvedValue('ok'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        { provide: FcmService, useValue: mockFcmService },
        { provide: WhatsappService, useValue: mockWhatsappService },
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
    loggerLogSpy = jest.spyOn(Logger.prototype, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    loggerLogSpy.mockRestore();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log on order.placed event', () => {
    const payload = { orderId: '123' };
    service.handleOrderPlacedEvent(payload);
    expect(loggerLogSpy).toHaveBeenCalledWith(
      `Event received: ${ORDER_PLACED}`,
      payload,
    );
  });

  it('should log on driver.assigned event', () => {
    const payload = { orderId: '123', driverId: '456' };
    service.handleDriverAssignedEvent(payload);
    expect(loggerLogSpy).toHaveBeenCalledWith(
      `Event received: ${DRIVER_ASSIGNED}`,
      payload,
    );
  });

  it('should log on order.delivered event', () => {
    const payload = { orderId: '123' };
    service.handleOrderDeliveredEvent(payload);
    expect(loggerLogSpy).toHaveBeenCalledWith(
      `Event received: ${ORDER_DELIVERED}`,
      payload,
    );
  });
});

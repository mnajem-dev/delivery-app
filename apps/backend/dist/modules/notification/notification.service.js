"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_1 = require("../../common/events/events");
const fcm_service_1 = require("./fcm.service");
const whatsapp_service_1 = require("./whatsapp.service");
let NotificationService = NotificationService_1 = class NotificationService {
    constructor(fcmService, whatsappService) {
        this.fcmService = fcmService;
        this.whatsappService = whatsappService;
        this.logger = new common_1.Logger(NotificationService_1.name);
    }
    async handleOrderPlacedEvent(payload) {
        this.logger.log(`Event received: ${events_1.ORDER_PLACED}`, payload);
        const { orderId, customerPhone, fcmToken } = payload || {};
        if (fcmToken) {
            await this.fcmService
                .sendPushNotification(fcmToken, 'Order Placed', `Your order ${orderId ? '#' + orderId : ''} has been successfully placed.`, { orderId: orderId ? String(orderId) : '' })
                .catch((e) => this.logger.error('Failed to send FCM', e));
        }
        if (customerPhone) {
            await this.whatsappService
                .sendTextMessage(customerPhone, `Your order ${orderId ? '#' + orderId : ''} has been successfully placed.`)
                .catch((e) => this.logger.error('Failed to send WhatsApp', e));
        }
    }
    async handleDriverAssignedEvent(payload) {
        this.logger.log(`Event received: ${events_1.DRIVER_ASSIGNED}`, payload);
        const { orderId, driverName, customerPhone, fcmToken, driverPhone, driverFcmToken } = payload || {};
        if (fcmToken) {
            await this.fcmService
                .sendPushNotification(fcmToken, 'Driver Assigned', `Driver ${driverName || 'assigned'} is on the way for your order ${orderId ? '#' + orderId : ''}.`, { orderId: orderId ? String(orderId) : '' })
                .catch((e) => this.logger.error('Failed to send FCM to customer', e));
        }
        if (customerPhone) {
            await this.whatsappService
                .sendTextMessage(customerPhone, `Driver ${driverName || 'assigned'} is on the way for your order ${orderId ? '#' + orderId : ''}.`)
                .catch((e) => this.logger.error('Failed to send WhatsApp to customer', e));
        }
        if (driverFcmToken) {
            await this.fcmService
                .sendPushNotification(driverFcmToken, 'New Order Assigned', `You have been assigned to order ${orderId ? '#' + orderId : ''}.`, { orderId: orderId ? String(orderId) : '' })
                .catch((e) => this.logger.error('Failed to send FCM to driver', e));
        }
        if (driverPhone) {
            await this.whatsappService
                .sendTextMessage(driverPhone, `You have been assigned to order ${orderId ? '#' + orderId : ''}.`)
                .catch((e) => this.logger.error('Failed to send WhatsApp to driver', e));
        }
    }
    async handleOrderDeliveredEvent(payload) {
        this.logger.log(`Event received: ${events_1.ORDER_DELIVERED}`, payload);
        const { orderId, customerPhone, phoneNumber, fcmToken, deviceToken } = payload || {};
        const targetToken = deviceToken || fcmToken;
        const targetPhone = phoneNumber || customerPhone;
        if (targetToken) {
            await this.fcmService
                .sendPushNotification(targetToken, 'Order Delivered', `Your order ${orderId ? '#' + orderId : ''} has been delivered. Enjoy!`, { orderId: orderId ? String(orderId) : '' })
                .catch((e) => this.logger.error('Failed to send FCM', e));
        }
        if (targetPhone) {
            await this.whatsappService
                .sendTextMessage(targetPhone, `Your order ${orderId ? '#' + orderId : ''} has been delivered. Enjoy!`)
                .catch((e) => this.logger.error('Failed to send WhatsApp', e));
        }
    }
};
exports.NotificationService = NotificationService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_1.ORDER_PLACED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "handleOrderPlacedEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)(events_1.DRIVER_ASSIGNED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "handleDriverAssignedEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)(events_1.ORDER_DELIVERED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "handleOrderDeliveredEvent", null);
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fcm_service_1.FcmService,
        whatsapp_service_1.WhatsappService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map
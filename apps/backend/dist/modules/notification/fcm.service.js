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
var FcmService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FcmService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_1 = require("firebase-admin/app");
const messaging_1 = require("firebase-admin/messaging");
let FcmService = FcmService_1 = class FcmService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(FcmService_1.name);
    }
    onModuleInit() {
        const projectId = this.configService.get('FCM_PROJECT_ID') ||
            this.configService.get('FIREBASE_PROJECT_ID');
        const clientEmail = this.configService.get('FCM_CLIENT_EMAIL') ||
            this.configService.get('FIREBASE_CLIENT_EMAIL');
        const privateKey = this.configService.get('FCM_PRIVATE_KEY') ||
            this.configService.get('FIREBASE_PRIVATE_KEY');
        if (!projectId || !clientEmail || !privateKey) {
            this.logger.warn('Firebase credentials are not fully configured in the environment. Push notifications might fail.');
            return;
        }
        try {
            this.firebaseApp = (0, app_1.initializeApp)({
                credential: (0, app_1.cert)({
                    projectId,
                    clientEmail,
                    privateKey: privateKey.replace(/\\n/g, '\n'),
                }),
            });
            this.logger.log('Firebase Admin SDK initialized successfully.');
        }
        catch (error) {
            this.logger.error('Failed to initialize Firebase Admin SDK', error);
        }
    }
    async sendPushNotification(token, title, body, data) {
        if (!this.firebaseApp) {
            this.logger.warn('Firebase App not initialized. Cannot send notification.');
            return null;
        }
        try {
            const response = await (0, messaging_1.getMessaging)(this.firebaseApp).send({
                token,
                notification: {
                    title,
                    body,
                },
                data,
            });
            this.logger.log(`Notification sent successfully: ${response}`);
            return response;
        }
        catch (error) {
            this.logger.error('Error sending push notification', error);
            throw error;
        }
    }
};
exports.FcmService = FcmService;
exports.FcmService = FcmService = FcmService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FcmService);
//# sourceMappingURL=fcm.service.js.map
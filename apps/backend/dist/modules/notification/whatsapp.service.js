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
var WhatsappService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let WhatsappService = WhatsappService_1 = class WhatsappService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(WhatsappService_1.name);
        this.accessToken =
            this.configService.get('WHATSAPP_TOKEN') ||
                this.configService.get('WHATSAPP_ACCESS_TOKEN');
        this.phoneNumberId =
            this.configService.get('WHATSAPP_PHONE_ID') ||
                this.configService.get('WHATSAPP_PHONE_NUMBER_ID');
        this.apiVersion = this.configService.get('WHATSAPP_API_VERSION', 'v20.0');
    }
    async sendTemplateMessage(to, templateName, languageCode, components = []) {
        if (!this.accessToken || !this.phoneNumberId) {
            this.logger.warn('WhatsApp credentials are not configured. Cannot send message.');
            return null;
        }
        const url = `https://graph.facebook.com/${this.apiVersion}/${this.phoneNumberId}/messages`;
        const payload = {
            messaging_product: 'whatsapp',
            to,
            type: 'template',
            template: {
                name: templateName,
                language: {
                    code: languageCode,
                },
                components,
            },
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (!response.ok) {
                this.logger.error(`Failed to send WhatsApp template message: ${JSON.stringify(data)}`);
                throw new Error(data.error?.message || 'Unknown WhatsApp API error');
            }
            this.logger.log(`WhatsApp template message sent successfully: ${JSON.stringify(data)}`);
            return data;
        }
        catch (error) {
            this.logger.error('Error sending WhatsApp template message', error);
            throw error;
        }
    }
    async sendTextMessage(to, text) {
        if (!this.accessToken || !this.phoneNumberId) {
            this.logger.warn('WhatsApp credentials are not configured. Cannot send message.');
            return null;
        }
        const url = `https://graph.facebook.com/${this.apiVersion}/${this.phoneNumberId}/messages`;
        const payload = {
            messaging_product: 'whatsapp',
            to,
            type: 'text',
            text: {
                body: text,
            },
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (!response.ok) {
                this.logger.error(`Failed to send WhatsApp text message: ${JSON.stringify(data)}`);
                throw new Error(data.error?.message || 'Unknown WhatsApp API error');
            }
            this.logger.log(`WhatsApp text message sent successfully: ${JSON.stringify(data)}`);
            return data;
        }
        catch (error) {
            this.logger.error('Error sending WhatsApp text message', error);
            throw error;
        }
    }
};
exports.WhatsappService = WhatsappService;
exports.WhatsappService = WhatsappService = WhatsappService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WhatsappService);
//# sourceMappingURL=whatsapp.service.js.map
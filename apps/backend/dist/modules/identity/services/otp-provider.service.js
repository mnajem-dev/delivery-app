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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpProviderService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let OtpProviderService = class OtpProviderService {
    constructor(config) {
        this.config = config;
        this.baseUrl = config.getOrThrow('OTP_API_BASE_URL');
        this.apiKey = config.getOrThrow('OTP_API_KEY');
    }
    async sendOtp(phone) {
        const res = await fetch(`${this.baseUrl}/api/v1/otp/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify({ phone }),
        });
        if (!res.ok) {
            throw new common_1.InternalServerErrorException('OTP send failed');
        }
        return res.json();
    }
    async verifyOtp(requestId, code) {
        const res = await fetch(`${this.baseUrl}/api/v1/otp/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify({ requestId, code }),
        });
        if (!res.ok) {
            throw new common_1.InternalServerErrorException('OTP verify request failed');
        }
        return res.json();
    }
};
exports.OtpProviderService = OtpProviderService;
exports.OtpProviderService = OtpProviderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OtpProviderService);
//# sourceMappingURL=otp-provider.service.js.map
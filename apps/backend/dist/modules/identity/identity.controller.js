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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../database/generated/prisma/client");
const prisma_service_1 = require("../../database/prisma.service");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const roles_decorator_1 = require("./decorators/roles.decorator");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
const request_otp_dto_1 = require("./dto/request-otp.dto");
const verify_otp_dto_1 = require("./dto/verify-otp.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const roles_guard_1 = require("./guards/roles.guard");
const identity_service_1 = require("./identity.service");
let IdentityController = class IdentityController {
    constructor(identityService, prisma) {
        this.identityService = identityService;
        this.prisma = prisma;
    }
    register(dto) {
        return this.identityService.register(dto);
    }
    login(dto) {
        return this.identityService.login(dto);
    }
    requestOtp(dto) {
        return this.identityService.requestOtp(dto);
    }
    verifyOtp(dto) {
        return this.identityService.verifyOtp(dto);
    }
    me(user) {
        return this.identityService.getProfile(user.sub);
    }
    registerDeviceToken(body, user) {
        return this.prisma.deviceToken.upsert({
            where: {
                userId_platform: {
                    userId: user.sub,
                    platform: body.platform,
                },
            },
            update: { token: body.token },
            create: {
                userId: user.sub,
                token: body.token,
                platform: body.platform,
            },
        });
    }
    adminPing(user) {
        return {
            message: 'admin access granted',
            userId: user.sub,
        };
    }
};
exports.IdentityController = IdentityController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('otp/request'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_otp_dto_1.RequestOtpDto]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "requestOtp", null);
__decorate([
    (0, common_1.Post)('otp/verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "me", null);
__decorate([
    (0, common_1.Post)('device-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "registerDeviceToken", null);
__decorate([
    (0, common_1.Get)('admin/ping'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.RoleEnum.ADMIN),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "adminPing", null);
exports.IdentityController = IdentityController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [identity_service_1.IdentityService,
        prisma_service_1.PrismaService])
], IdentityController);
//# sourceMappingURL=identity.controller.js.map
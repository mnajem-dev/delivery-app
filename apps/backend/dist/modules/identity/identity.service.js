"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("../../database/generated/prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../../database/prisma.service");
const otp_provider_service_1 = require("./services/otp-provider.service");
const MAX_OTP_ATTEMPTS = 5;
const OTP_BLOCK_MINUTES = 15;
const BCRYPT_ROUNDS = 12;
let IdentityService = class IdentityService {
    constructor(prisma, jwtService, otpProvider) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.otpProvider = otpProvider;
    }
    async register(dto) {
        if (dto.role === client_1.RoleEnum.ADMIN && !dto.department) {
            throw new common_1.BadRequestException('department is required for ADMIN role');
        }
        const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
        try {
            const user = await this.prisma.$transaction(async (tx) => {
                const createdUser = await tx.user.create({
                    data: {
                        name: dto.name,
                        email: dto.email,
                        phone: dto.phone,
                        passwordHash,
                        role: dto.role,
                        status: this.defaultStatusForRole(dto.role),
                    },
                });
                await this.createRoleProfile(tx, createdUser.id, dto);
                return createdUser;
            });
            return this.buildAuthResponse(user);
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('Email or phone already registered');
            }
            throw error;
        }
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user || !user.passwordHash) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const passwordMatches = await bcrypt.compare(dto.password, user.passwordHash);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.status === client_1.StatusEnum.SUSPENDED) {
            throw new common_1.UnauthorizedException('Account suspended');
        }
        return this.buildAuthResponse(user);
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
                status: true,
                createdAt: true,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return user;
    }
    async requestOtp(dto) {
        const existing = await this.prisma.otpRequest.findFirst({
            where: { phone: dto.phone },
            orderBy: { createdAt: 'desc' },
        });
        if (existing?.blockedUntil && existing.blockedUntil > new Date()) {
            const retryAfter = Math.ceil((existing.blockedUntil.getTime() - Date.now()) / 1000);
            throw new common_1.ForbiddenException(`Too many attempts. Try again in ${retryAfter} seconds.`);
        }
        const sent = await this.otpProvider.sendOtp(dto.phone);
        await this.prisma.otpRequest.create({
            data: {
                requestId: sent.requestId,
                phone: sent.phone,
                expiresAt: new Date(sent.expiresAt),
            },
        });
        return {
            requestId: sent.requestId,
            expiresAt: sent.expiresAt,
            expiresInSeconds: sent.expiresInSeconds,
        };
    }
    async verifyOtp(dto) {
        const otpRecord = await this.prisma.otpRequest.findUnique({
            where: { requestId: dto.requestId },
        });
        if (!otpRecord) {
            throw new common_1.NotFoundException('OTP request not found');
        }
        if (otpRecord.blockedUntil && otpRecord.blockedUntil > new Date()) {
            const retryAfter = Math.ceil((otpRecord.blockedUntil.getTime() - Date.now()) / 1000);
            throw new common_1.ForbiddenException(`Too many attempts. Try again in ${retryAfter} seconds.`);
        }
        if (otpRecord.expiresAt < new Date()) {
            throw new common_1.BadRequestException('OTP has expired');
        }
        const result = await this.otpProvider.verifyOtp(dto.requestId, dto.code);
        if (!result.verified) {
            const newAttempts = otpRecord.attempts + 1;
            const blockedUntil = newAttempts >= MAX_OTP_ATTEMPTS
                ? new Date(Date.now() + OTP_BLOCK_MINUTES * 60 * 1000)
                : null;
            await this.prisma.otpRequest.update({
                where: { id: otpRecord.id },
                data: { attempts: newAttempts, blockedUntil },
            });
            if (blockedUntil) {
                throw new common_1.ForbiddenException(`Too many failed attempts. Account locked for ${OTP_BLOCK_MINUTES} minutes.`);
            }
            throw new common_1.BadRequestException('Invalid OTP code');
        }
        try {
            const user = await this.prisma.$transaction(async (tx) => {
                const created = await tx.user.create({
                    data: {
                        name: dto.name,
                        email: dto.email ?? null,
                        phone: otpRecord.phone,
                        passwordHash: null,
                        role: client_1.RoleEnum.CLIENT,
                        status: client_1.StatusEnum.ACTIVE,
                    },
                });
                await tx.client.create({ data: { userId: created.id } });
                return created;
            });
            await this.prisma.otpRequest.delete({ where: { id: otpRecord.id } });
            return this.buildAuthResponse(user);
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('Phone or email already registered');
            }
            throw error;
        }
    }
    defaultStatusForRole(role) {
        if (role === client_1.RoleEnum.DRIVER || role === client_1.RoleEnum.VENDOR) {
            return client_1.StatusEnum.PENDING;
        }
        return client_1.StatusEnum.ACTIVE;
    }
    async createRoleProfile(tx, userId, dto) {
        switch (dto.role) {
            case client_1.RoleEnum.CLIENT:
                await tx.client.create({ data: { userId } });
                return;
            case client_1.RoleEnum.DRIVER:
                await tx.driver.create({
                    data: {
                        userId,
                        status: client_1.DriverStatus.OFFLINE,
                        approvalStatus: client_1.ApprovalEnum.PENDING,
                    },
                });
                return;
            case client_1.RoleEnum.VENDOR:
                await tx.vendor.create({
                    data: {
                        userId,
                        name: dto.vendorName,
                        address: dto.address,
                        lat: dto.lat,
                        lng: dto.lng,
                        isOpen: false,
                        rating: 0,
                        deliveryRadius: 5,
                        commissionRate: 0.15,
                    },
                });
                return;
            case client_1.RoleEnum.ADMIN:
                await tx.admin.create({
                    data: {
                        userId,
                        department: dto.department,
                    },
                });
                return;
            default:
                throw new common_1.BadRequestException('Unsupported role');
        }
    }
    buildAuthResponse(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        };
        return {
            accessToken: this.jwtService.sign(payload),
            user: this.toPublicUser(user),
        };
    }
    toPublicUser(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            status: user.status,
            createdAt: user.createdAt,
        };
    }
};
exports.IdentityService = IdentityService;
exports.IdentityService = IdentityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        otp_provider_service_1.OtpProviderService])
], IdentityService);
//# sourceMappingURL=identity.service.js.map
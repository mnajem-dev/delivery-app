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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let AddressService = class AddressService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(clientId, dto) {
        const isFirstAddress = (await this.prisma.address.count({ where: { clientId } })) === 0;
        const makeDefault = dto.isDefault ?? isFirstAddress;
        return this.prisma.$transaction(async (tx) => {
            if (makeDefault) {
                await tx.address.updateMany({
                    where: { clientId },
                    data: { isDefault: false },
                });
            }
            return tx.address.create({
                data: {
                    clientId,
                    label: dto.label,
                    fullAddress: dto.fullAddress,
                    lat: dto.lat,
                    lng: dto.lng,
                    isDefault: makeDefault,
                },
            });
        });
    }
    findAll(clientId) {
        return this.prisma.address.findMany({
            where: { clientId },
            orderBy: [{ isDefault: 'desc' }, { id: 'asc' }],
        });
    }
    async findOne(clientId, id) {
        const address = await this.prisma.address.findUnique({ where: { id } });
        this.assertOwnership(address, clientId);
        return address;
    }
    async update(clientId, id, dto) {
        const address = await this.prisma.address.findUnique({ where: { id } });
        this.assertOwnership(address, clientId);
        return this.prisma.address.update({
            where: { id },
            data: dto,
        });
    }
    async setDefault(clientId, id) {
        const address = await this.prisma.address.findUnique({ where: { id } });
        this.assertOwnership(address, clientId);
        return this.prisma.$transaction(async (tx) => {
            await tx.address.updateMany({
                where: { clientId },
                data: { isDefault: false },
            });
            return tx.address.update({
                where: { id },
                data: { isDefault: true },
            });
        });
    }
    async remove(clientId, id) {
        const address = await this.prisma.address.findUnique({ where: { id } });
        this.assertOwnership(address, clientId);
        await this.prisma.address.delete({ where: { id } });
    }
    assertOwnership(address, clientId) {
        if (!address)
            throw new common_1.NotFoundException('Address not found');
        if (address.clientId !== clientId)
            throw new common_1.ForbiddenException('Access denied');
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AddressService);
//# sourceMappingURL=address.service.js.map
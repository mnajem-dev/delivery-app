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
exports.VendorController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const client_1 = require("../../database/generated/prisma/client");
const current_user_decorator_1 = require("../identity/decorators/current-user.decorator");
const roles_decorator_1 = require("../identity/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../identity/guards/jwt-auth.guard");
const roles_guard_1 = require("../identity/guards/roles.guard");
const catalog_service_1 = require("./catalog.service");
const list_vendors_query_dto_1 = require("./dto/list-vendors-query.dto");
const update_vendor_dto_1 = require("./dto/update-vendor.dto");
let VendorController = class VendorController {
    constructor(catalog) {
        this.catalog = catalog;
    }
    list(query) {
        return this.catalog.listVendors(query);
    }
    getOne(id) {
        return this.catalog.getVendor(id);
    }
    updateMe(user, dto) {
        return this.catalog.updateVendor(user.sub, dto);
    }
    uploadLogo(user, file) {
        return this.catalog.uploadVendorLogo(user.sub, file);
    }
};
exports.VendorController = VendorController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_vendors_query_dto_1.ListVendorsQueryDto]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.RoleEnum.VENDOR),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_vendor_dto_1.UpdateVendorDto]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "updateMe", null);
__decorate([
    (0, common_1.Post)('me/logo'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.RoleEnum.VENDOR),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: undefined })),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "uploadLogo", null);
exports.VendorController = VendorController = __decorate([
    (0, common_1.Controller)('catalog/vendors'),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], VendorController);
//# sourceMappingURL=vendor.controller.js.map
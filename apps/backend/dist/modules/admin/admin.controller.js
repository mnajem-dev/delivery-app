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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const reports_service_1 = require("./reports.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../identity/guards/roles.guard");
const roles_decorator_1 = require("../identity/decorators/roles.decorator");
const client_1 = require("../../database/generated/prisma/client");
let AdminController = class AdminController {
    constructor(adminService, reportsService) {
        this.adminService = adminService;
        this.reportsService = reportsService;
    }
    getOrders(page = 1, limit = 10) {
        return this.adminService.getOrders(page, limit);
    }
    getStats() {
        return this.adminService.getStats();
    }
    suspendUser(userId) {
        return this.adminService.suspendUser(userId);
    }
    async getOrdersCsv(res) {
        res.set({
            'Content-Type': 'text/csv',
            'Content-Disposition': 'attachment; filename="orders.csv"',
        });
        return this.reportsService.generateOrdersCsv();
    }
    async getStatsPdf(res) {
        const buffer = await this.reportsService.generateStatsPdf();
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="stats-report.pdf"',
            'Content-Length': buffer.length.toString(),
        });
        res.end(buffer);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('orders'),
    __param(0, (0, common_1.Query)('page', new common_1.ParseIntPipe({ optional: true }))),
    __param(1, (0, common_1.Query)('limit', new common_1.ParseIntPipe({ optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getStats", null);
__decorate([
    (0, common_1.Post)('users/:id/suspend'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "suspendUser", null);
__decorate([
    (0, common_1.Get)('reports/orders/csv'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getOrdersCsv", null);
__decorate([
    (0, common_1.Get)('reports/stats/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getStatsPdf", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.RoleEnum.ADMIN),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        reports_service_1.ReportsService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map
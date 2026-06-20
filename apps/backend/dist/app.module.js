"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./database/prisma.module");
const admin_module_1 = require("./modules/admin/admin.module");
const catalog_module_1 = require("./modules/catalog/catalog.module");
const dispatch_module_1 = require("./modules/dispatch/dispatch.module");
const health_module_1 = require("./modules/health/health.module");
const identity_module_1 = require("./modules/identity/identity.module");
const notification_module_1 = require("./modules/notification/notification.module");
const order_module_1 = require("./modules/order/order.module");
const tracking_module_1 = require("./modules/tracking/tracking.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            identity_module_1.IdentityModule,
            catalog_module_1.CatalogModule,
            order_module_1.OrderModule,
            dispatch_module_1.DispatchModule,
            tracking_module_1.TrackingModule,
            notification_module_1.NotificationModule,
            admin_module_1.AdminModule,
            health_module_1.HealthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
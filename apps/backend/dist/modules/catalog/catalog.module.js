"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogModule = void 0;
const common_1 = require("@nestjs/common");
const identity_module_1 = require("../identity/identity.module");
const catalog_service_1 = require("./catalog.service");
const menu_item_controller_1 = require("./menu-item.controller");
const storage_service_1 = require("./storage/storage.service");
const vendor_controller_1 = require("./vendor.controller");
let CatalogModule = class CatalogModule {
};
exports.CatalogModule = CatalogModule;
exports.CatalogModule = CatalogModule = __decorate([
    (0, common_1.Module)({
        imports: [identity_module_1.IdentityModule],
        controllers: [vendor_controller_1.VendorController, menu_item_controller_1.MenuItemController],
        providers: [catalog_service_1.CatalogService, storage_service_1.StorageService],
    })
], CatalogModule);
//# sourceMappingURL=catalog.module.js.map
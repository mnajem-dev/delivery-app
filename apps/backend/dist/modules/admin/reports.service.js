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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const json2csv_1 = require("json2csv");
const PDFDocument = require("pdfkit");
let ReportsService = class ReportsService {
    constructor(adminService) {
        this.adminService = adminService;
    }
    generateOrdersCsv() {
        const ordersData = this.adminService.getOrders(1, 1000).data;
        const fields = ['id', 'customerName', 'status', 'amount', 'createdAt'];
        const parser = new json2csv_1.Parser({ fields });
        return parser.parse(ordersData);
    }
    generateStatsPdf() {
        const stats = this.adminService.getStats();
        return new Promise((resolve, reject) => {
            const doc = new PDFDocument({ margin: 50 });
            const chunks = [];
            doc.on('data', (chunk) => chunks.push(chunk));
            doc.on('end', () => resolve(Buffer.concat(chunks)));
            doc.on('error', (err) => reject(err));
            doc.fontSize(20).text('IDER System Stats Report', { align: 'center' });
            doc.moveDown(1.5);
            doc.fontSize(14).text(`Generated At: ${new Date().toLocaleString()}`);
            doc.text(`Total Orders: ${stats.totalOrders}`);
            doc.text(`Total Revenue: $${stats.totalRevenue}`);
            doc.text(`Active Users: ${stats.activeUsersCount}`);
            doc.text(`Suspended Users: ${stats.suspendedUsersCount}`);
            doc.moveDown(1.5);
            doc.fontSize(16).text('Orders Status Breakdown', { underline: true });
            doc.moveDown(0.5);
            doc.fontSize(12);
            Object.entries(stats.ordersByStatus).forEach(([status, count]) => {
                doc.text(`- ${status}: ${count} orders`);
            });
            doc.end();
        });
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map
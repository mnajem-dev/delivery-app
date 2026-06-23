import { Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Parser } from 'json2csv';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class ReportsService {
  constructor(private readonly adminService: AdminService) {}

  generateOrdersCsv(): string {
    const ordersData = this.adminService.getOrders(1, 1000).data;
    const fields = ['id', 'customerName', 'status', 'amount', 'createdAt'];
    const parser = new Parser({ fields });
    return parser.parse(ordersData);
  }

  generateStatsPdf(): Promise<Buffer> {
    const stats = this.adminService.getStats();

    return new Promise((resolve, reject) => {
      const doc = new PDFDocument({ margin: 50 });
      const chunks: Buffer[] = [];

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));

      // Report Header
      doc.fontSize(20).text('IDER System Stats Report', { align: 'center' });
      doc.moveDown(1.5);

      // Section 1: Overview
      doc.fontSize(14).text(`Generated At: ${new Date().toLocaleString()}`);
      doc.text(`Total Orders: ${stats.totalOrders}`);
      doc.text(`Total Revenue: $${stats.totalRevenue}`);
      doc.text(`Active Users: ${stats.activeUsersCount}`);
      doc.text(`Suspended Users: ${stats.suspendedUsersCount}`);
      doc.moveDown(1.5);

      // Section 2: Breakdown by Status
      doc.fontSize(16).text('Orders Status Breakdown', { underline: true });
      doc.moveDown(0.5);

      doc.fontSize(12);
      Object.entries(stats.ordersByStatus).forEach(([status, count]) => {
        doc.text(`- ${status}: ${count} orders`);
      });

      doc.end();
    });
  }
}

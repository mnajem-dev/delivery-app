import { AdminService } from './admin.service';
export declare class ReportsService {
    private readonly adminService;
    constructor(adminService: AdminService);
    generateOrdersCsv(): Promise<string>;
    generateStatsPdf(): Promise<Buffer>;
}

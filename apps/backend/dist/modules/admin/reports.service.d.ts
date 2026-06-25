import { AdminService } from './admin.service';
export declare class ReportsService {
    private readonly adminService;
    constructor(adminService: AdminService);
    generateOrdersCsv(): string;
    generateStatsPdf(): Promise<Buffer>;
}

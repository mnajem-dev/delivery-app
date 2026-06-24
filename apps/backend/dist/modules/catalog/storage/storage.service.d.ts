import { ConfigService } from '@nestjs/config';
export declare class StorageService {
    private readonly config;
    private readonly client;
    private readonly bucket;
    private readonly publicUrl;
    constructor(config: ConfigService);
    upload(file: Express.Multer.File, folder: 'vendors' | 'menu-items'): Promise<string>;
    delete(url: string): Promise<void>;
}

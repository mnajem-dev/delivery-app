import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class FcmService implements OnModuleInit {
    private readonly configService;
    private readonly logger;
    private firebaseApp?;
    constructor(configService: ConfigService);
    onModuleInit(): void;
    sendPushNotification(token: string, title: string, body: string, data?: Record<string, string>): Promise<string | null>;
}

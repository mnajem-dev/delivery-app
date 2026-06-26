import { ConfigService } from '@nestjs/config';
export declare class WhatsappService {
    private readonly configService;
    private readonly logger;
    private readonly accessToken?;
    private readonly phoneNumberId?;
    private readonly apiVersion;
    constructor(configService: ConfigService);
    sendTemplateMessage(to: string, templateName: string, languageCode: string, components?: any[]): Promise<any>;
    sendTextMessage(to: string, text: string): Promise<any>;
}

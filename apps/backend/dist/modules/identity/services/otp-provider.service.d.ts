import { ConfigService } from '@nestjs/config';
export interface OtpSendResponse {
    requestId: string;
    phone: string;
    expiresAt: string;
    expiresInSeconds: number;
}
export interface OtpVerifyResponse {
    verified: boolean;
    phone: string;
}
export declare class OtpProviderService {
    private readonly config;
    private readonly baseUrl;
    private readonly apiKey;
    constructor(config: ConfigService);
    sendOtp(phone: string): Promise<OtpSendResponse>;
    verifyOtp(requestId: string, code: string): Promise<OtpVerifyResponse>;
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

@Injectable()
export class OtpProviderService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private readonly config: ConfigService) {
    this.baseUrl = config.getOrThrow<string>('OTP_API_BASE_URL');
    this.apiKey = config.getOrThrow<string>('OTP_API_KEY');
  }

  async sendOtp(phone: string): Promise<OtpSendResponse> {
    const res = await fetch(`${this.baseUrl}/api/v1/otp/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({ phone }),
    });

    if (!res.ok) {
      throw new InternalServerErrorException('OTP send failed');
    }

    return res.json() as Promise<OtpSendResponse>;
  }

  async verifyOtp(requestId: string, code: string): Promise<OtpVerifyResponse> {
    const res = await fetch(`${this.baseUrl}/api/v1/otp/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({ requestId, code }),
    });

    if (!res.ok) {
      throw new InternalServerErrorException('OTP verify request failed');
    }

    return res.json() as Promise<OtpVerifyResponse>;
  }
}

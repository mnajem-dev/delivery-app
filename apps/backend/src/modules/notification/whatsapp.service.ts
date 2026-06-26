import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WhatsappService {
  private readonly logger = new Logger(WhatsappService.name);
  private readonly accessToken?: string;
  private readonly phoneNumberId?: string;
  private readonly apiVersion: string;

  constructor(private readonly configService: ConfigService) {
    this.accessToken =
      this.configService.get<string>('WHATSAPP_TOKEN') ||
      this.configService.get<string>('WHATSAPP_ACCESS_TOKEN');
    this.phoneNumberId =
      this.configService.get<string>('WHATSAPP_PHONE_ID') ||
      this.configService.get<string>('WHATSAPP_PHONE_NUMBER_ID');
    this.apiVersion = this.configService.get<string>('WHATSAPP_API_VERSION', 'v20.0');
  }

  /**
   * Sends a template-based message via official WhatsApp Business API
   */
  async sendTemplateMessage(
    to: string,
    templateName: string,
    languageCode: string,
    components: any[] = [],
  ): Promise<any> {
    if (!this.accessToken || !this.phoneNumberId) {
      this.logger.warn('WhatsApp credentials are not configured. Cannot send message.');
      return null;
    }

    const url = `https://graph.facebook.com/${this.apiVersion}/${this.phoneNumberId}/messages`;
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'template',
      template: {
        name: templateName,
        language: {
          code: languageCode,
        },
        components,
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        this.logger.error(`Failed to send WhatsApp template message: ${JSON.stringify(data)}`);
        throw new Error(data.error?.message || 'Unknown WhatsApp API error');
      }

      this.logger.log(`WhatsApp template message sent successfully: ${JSON.stringify(data)}`);
      return data;
    } catch (error) {
      this.logger.error('Error sending WhatsApp template message', error);
      throw error;
    }
  }

  /**
   * Sends a plain text message via official WhatsApp Business API
   */
  async sendTextMessage(to: string, text: string): Promise<any> {
    if (!this.accessToken || !this.phoneNumberId) {
      this.logger.warn('WhatsApp credentials are not configured. Cannot send message.');
      return null;
    }

    const url = `https://graph.facebook.com/${this.apiVersion}/${this.phoneNumberId}/messages`;
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: {
        body: text,
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        this.logger.error(`Failed to send WhatsApp text message: ${JSON.stringify(data)}`);
        throw new Error(data.error?.message || 'Unknown WhatsApp API error');
      }

      this.logger.log(`WhatsApp text message sent successfully: ${JSON.stringify(data)}`);
      return data;
    } catch (error) {
      this.logger.error('Error sending WhatsApp text message', error);
      throw error;
    }
  }
}

import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FcmService implements OnModuleInit {
  private readonly logger = new Logger(FcmService.name);
  private firebaseApp: admin.app.App;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    const projectId =
      this.configService.get<string>('FCM_PROJECT_ID') ||
      this.configService.get<string>('FIREBASE_PROJECT_ID');
    const clientEmail =
      this.configService.get<string>('FCM_CLIENT_EMAIL') ||
      this.configService.get<string>('FIREBASE_CLIENT_EMAIL');
    const privateKey =
      this.configService.get<string>('FCM_PRIVATE_KEY') ||
      this.configService.get<string>('FIREBASE_PRIVATE_KEY');

    if (!projectId || !clientEmail || !privateKey) {
      this.logger.warn(
        'Firebase credentials are not fully configured in the environment. Push notifications might fail.',
      );
      return;
    }

    try {
      this.firebaseApp = admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      });
      this.logger.log('Firebase Admin SDK initialized successfully.');
    } catch (error) {
      this.logger.error('Failed to initialize Firebase Admin SDK', error);
    }
  }

  async sendPushNotification(
    token: string,
    title: string,
    body: string,
    data?: Record<string, string>,
  ): Promise<string> {
    if (!this.firebaseApp) {
      this.logger.warn('Firebase App not initialized. Cannot send notification.');
      return null;
    }

    try {
      const response = await admin.messaging(this.firebaseApp).send({
        token,
        notification: {
          title,
          body,
        },
        data,
      });
      this.logger.log(`Notification sent successfully: ${response}`);
      return response;
    } catch (error) {
      this.logger.error('Error sending push notification', error);
      throw error;
    }
  }
}

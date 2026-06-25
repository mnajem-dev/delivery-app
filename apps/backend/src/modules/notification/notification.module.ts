import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { FcmService } from './fcm.service';
import { WhatsappService } from './whatsapp.service';

@Module({
  providers: [NotificationService, FcmService, WhatsappService],
  exports: [FcmService, WhatsappService],
})
export class NotificationModule {}

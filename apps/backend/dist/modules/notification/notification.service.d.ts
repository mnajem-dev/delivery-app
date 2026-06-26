import { FcmService } from './fcm.service';
import { WhatsappService } from './whatsapp.service';
export declare class NotificationService {
    private readonly fcmService;
    private readonly whatsappService;
    private readonly logger;
    constructor(fcmService: FcmService, whatsappService: WhatsappService);
    handleOrderPlacedEvent(payload: any): Promise<void>;
    handleDriverAssignedEvent(payload: any): Promise<void>;
    handleOrderDeliveredEvent(payload: any): Promise<void>;
}

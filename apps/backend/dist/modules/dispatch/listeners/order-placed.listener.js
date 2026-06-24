"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OrderPlacedListener_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPlacedListener = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_1 = require("../../../common/events/events");
const order_placed_event_1 = require("../../../common/events/order-placed.event");
let OrderPlacedListener = OrderPlacedListener_1 = class OrderPlacedListener {
    constructor() {
        this.logger = new common_1.Logger(OrderPlacedListener_1.name);
    }
    handle(event) {
        this.logger.log(`[dispatch] OrderPlaced received — orderId=${event.orderId}`);
    }
};
exports.OrderPlacedListener = OrderPlacedListener;
__decorate([
    (0, event_emitter_1.OnEvent)(events_1.EVENTS.ORDER_PLACED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_placed_event_1.OrderPlacedEvent]),
    __metadata("design:returntype", void 0)
], OrderPlacedListener.prototype, "handle", null);
exports.OrderPlacedListener = OrderPlacedListener = OrderPlacedListener_1 = __decorate([
    (0, common_1.Injectable)()
], OrderPlacedListener);
//# sourceMappingURL=order-placed.listener.js.map
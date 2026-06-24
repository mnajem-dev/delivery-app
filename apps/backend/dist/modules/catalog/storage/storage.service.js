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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const crypto_1 = require("crypto");
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;
let StorageService = class StorageService {
    constructor(config) {
        this.config = config;
        this.bucket = config.getOrThrow('STORAGE_BUCKET');
        this.publicUrl = config.getOrThrow('STORAGE_PUBLIC_URL').replace(/\/$/, '');
        this.client = new client_s3_1.S3Client({
            endpoint: config.getOrThrow('STORAGE_ENDPOINT'),
            region: config.get('STORAGE_REGION', 'us-east-1'),
            credentials: {
                accessKeyId: config.getOrThrow('STORAGE_ACCESS_KEY'),
                secretAccessKey: config.getOrThrow('STORAGE_SECRET_KEY'),
            },
            forcePathStyle: true,
        });
    }
    async upload(file, folder) {
        if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
            throw new common_1.UnsupportedMediaTypeException(`Allowed types: ${ALLOWED_MIME_TYPES.join(', ')}`);
        }
        if (file.size > MAX_SIZE_BYTES) {
            throw new common_1.UnsupportedMediaTypeException('File exceeds 5 MB limit');
        }
        const ext = file.originalname.split('.').pop() ?? 'jpg';
        const key = `${folder}/${(0, crypto_1.randomUUID)()}.${ext}`;
        try {
            await this.client.send(new client_s3_1.PutObjectCommand({
                Bucket: this.bucket,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype,
                ContentLength: file.size,
            }));
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to upload file');
        }
        return `${this.publicUrl}/${this.bucket}/${key}`;
    }
    async delete(url) {
        const prefix = `${this.publicUrl}/${this.bucket}/`;
        if (!url.startsWith(prefix))
            return;
        const key = url.slice(prefix.length);
        try {
            await this.client.send(new client_s3_1.DeleteObjectCommand({ Bucket: this.bucket, Key: key }));
        }
        catch {
        }
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StorageService);
//# sourceMappingURL=storage.service.js.map
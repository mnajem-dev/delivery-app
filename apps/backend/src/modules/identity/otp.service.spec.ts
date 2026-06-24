import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Prisma, RoleEnum, StatusEnum } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { IdentityService } from './identity.service';
import { OtpProviderService } from './services/otp-provider.service';

const PHONE = '+22234000000';
const REQUEST_ID = 'otp_7x9m3';
const FUTURE = new Date(Date.now() + 10 * 60 * 1000);
const PAST = new Date(Date.now() - 1000);

const makeOtpRecord = (overrides: object = {}) => ({
  id: 'otp-record-uuid',
  requestId: REQUEST_ID,
  phone: PHONE,
  attempts: 0,
  blockedUntil: null,
  expiresAt: FUTURE,
  createdAt: new Date(),
  ...overrides,
});

const makeUser = () => ({
  id: 'user-uuid',
  name: 'Alice',
  email: null,
  phone: PHONE,
  passwordHash: null,
  role: RoleEnum.CLIENT,
  status: StatusEnum.ACTIVE,
  createdAt: new Date(),
});

const makePrisma = () => ({
  user: { create: jest.fn() },
  client: { create: jest.fn() },
  otpRequest: {
    findFirst: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  $transaction: jest.fn(),
});

const makeJwt = () => ({ sign: jest.fn().mockReturnValue('jwt-token') });

const makeOtpProvider = () => ({
  sendOtp: jest.fn(),
  verifyOtp: jest.fn(),
});

describe('IdentityService — OTP', () => {
  let service: IdentityService;
  let prisma: ReturnType<typeof makePrisma>;
  let otpProvider: ReturnType<typeof makeOtpProvider>;

  beforeEach(async () => {
    prisma = makePrisma();
    otpProvider = makeOtpProvider();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IdentityService,
        { provide: PrismaService, useValue: prisma },
        { provide: JwtService, useValue: makeJwt() },
        { provide: OtpProviderService, useValue: otpProvider },
      ],
    }).compile();

    service = module.get(IdentityService);
  });

  // ── requestOtp ─────────────────────────────────────────────────────────────

  describe('requestOtp', () => {
    const dto = { phone: PHONE };

    it('sends OTP and stores OtpRequest', async () => {
      prisma.otpRequest.findFirst.mockResolvedValue(null);
      otpProvider.sendOtp.mockResolvedValue({
        success: true,
        requestId: REQUEST_ID,
        phone: PHONE,
        expiresAt: FUTURE.toISOString(),
        expiresInSeconds: 300,
      });
      prisma.otpRequest.create.mockResolvedValue(makeOtpRecord());

      const result = await service.requestOtp(dto);

      expect(otpProvider.sendOtp).toHaveBeenCalledWith(PHONE);
      expect(prisma.otpRequest.create).toHaveBeenCalled();
      expect(result.requestId).toBe(REQUEST_ID);
    });

    it('throws ForbiddenException when phone is blocked', async () => {
      prisma.otpRequest.findFirst.mockResolvedValue(
        makeOtpRecord({ blockedUntil: FUTURE }),
      );

      await expect(service.requestOtp(dto)).rejects.toThrow(ForbiddenException);
    });

    it('allows new request when block has expired', async () => {
      prisma.otpRequest.findFirst.mockResolvedValue(
        makeOtpRecord({ blockedUntil: PAST }),
      );
      otpProvider.sendOtp.mockResolvedValue({
        requestId: REQUEST_ID,
        phone: PHONE,
        expiresAt: FUTURE.toISOString(),
        expiresInSeconds: 300,
      });
      prisma.otpRequest.create.mockResolvedValue(makeOtpRecord());

      await expect(service.requestOtp(dto)).resolves.toBeDefined();
    });
  });

  // ── verifyOtp ──────────────────────────────────────────────────────────────

  describe('verifyOtp', () => {
    const dto = { requestId: REQUEST_ID, code: '123456', name: 'Alice' };

    it('creates CLIENT user and returns JWT on correct code', async () => {
      const user = makeUser();
      prisma.otpRequest.findUnique.mockResolvedValue(makeOtpRecord());
      otpProvider.verifyOtp.mockResolvedValue({ verified: true, phone: PHONE });
      prisma.$transaction.mockImplementation(async (fn: (tx: typeof prisma) => Promise<unknown>) => fn(prisma));
      prisma.user.create.mockResolvedValue(user);
      prisma.client.create.mockResolvedValue({});
      prisma.otpRequest.delete.mockResolvedValue({});

      const result = await service.verifyOtp(dto);

      expect(result.accessToken).toBe('jwt-token');
      expect(result.user.phone).toBe(PHONE);
      expect(prisma.otpRequest.delete).toHaveBeenCalled();
    });

    it('throws NotFoundException when requestId not found', async () => {
      prisma.otpRequest.findUnique.mockResolvedValue(null);

      await expect(service.verifyOtp(dto)).rejects.toThrow(NotFoundException);
    });

    it('throws ForbiddenException when record is blocked', async () => {
      prisma.otpRequest.findUnique.mockResolvedValue(
        makeOtpRecord({ blockedUntil: FUTURE }),
      );

      await expect(service.verifyOtp(dto)).rejects.toThrow(ForbiddenException);
    });

    it('throws BadRequestException when OTP is expired', async () => {
      prisma.otpRequest.findUnique.mockResolvedValue(
        makeOtpRecord({ expiresAt: PAST }),
      );

      await expect(service.verifyOtp(dto)).rejects.toThrow(BadRequestException);
    });

    it('throws BadRequestException and increments attempts on wrong code', async () => {
      prisma.otpRequest.findUnique.mockResolvedValue(makeOtpRecord({ attempts: 2 }));
      otpProvider.verifyOtp.mockResolvedValue({ verified: false, phone: PHONE });
      prisma.otpRequest.update.mockResolvedValue({});

      await expect(service.verifyOtp(dto)).rejects.toThrow(BadRequestException);

      expect(prisma.otpRequest.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ attempts: 3, blockedUntil: null }),
        }),
      );
    });

    it('locks account after 5th failed attempt', async () => {
      prisma.otpRequest.findUnique.mockResolvedValue(makeOtpRecord({ attempts: 4 }));
      otpProvider.verifyOtp.mockResolvedValue({ verified: false, phone: PHONE });
      prisma.otpRequest.update.mockResolvedValue({});

      await expect(service.verifyOtp(dto)).rejects.toThrow(ForbiddenException);

      expect(prisma.otpRequest.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            attempts: 5,
            blockedUntil: expect.any(Date),
          }),
        }),
      );
    });

    it('throws ConflictException when phone already registered', async () => {
      prisma.otpRequest.findUnique.mockResolvedValue(makeOtpRecord());
      otpProvider.verifyOtp.mockResolvedValue({ verified: true, phone: PHONE });
      const p2002 = new Prisma.PrismaClientKnownRequestError('Unique constraint', {
        code: 'P2002',
        clientVersion: '0',
      });
      prisma.$transaction.mockRejectedValue(p2002);

      await expect(service.verifyOtp(dto)).rejects.toThrow(ConflictException);
    });
  });
});

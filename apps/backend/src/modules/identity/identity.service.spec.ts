import { BadRequestException, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Prisma, RoleEnum, StatusEnum } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { IdentityService } from './identity.service';
import { OtpProviderService } from './services/otp-provider.service';

// Mock bcrypt before any imports that use it
jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed-password'),
  compare: jest.fn().mockResolvedValue(true),
}));

import * as bcrypt from 'bcrypt';

const mockUser = {
  id: 'user-uuid',
  name: 'Alice',
  email: 'alice@example.com',
  phone: '+1234567890',
  passwordHash: 'hashed',
  role: RoleEnum.CLIENT,
  status: StatusEnum.ACTIVE,
  createdAt: new Date(),
};

const publicMockUser = {
  id: mockUser.id,
  name: mockUser.name,
  email: mockUser.email,
  phone: mockUser.phone,
  role: mockUser.role,
  status: mockUser.status,
  createdAt: mockUser.createdAt,
};

const makePrisma = () => ({
  user: {
    create: jest.fn(),
    findUnique: jest.fn(),
  },
  client: { create: jest.fn() },
  driver: { create: jest.fn() },
  vendor: { create: jest.fn() },
  admin: { create: jest.fn() },
  $transaction: jest.fn(),
});

const makeJwt = () => ({
  sign: jest.fn().mockReturnValue('jwt-token'),
});

describe('IdentityService', () => {
  let service: IdentityService;
  let prisma: ReturnType<typeof makePrisma>;
  let jwt: ReturnType<typeof makeJwt>;

  beforeEach(async () => {
    prisma = makePrisma();
    jwt = makeJwt();
    jest.clearAllMocks();
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IdentityService,
        { provide: PrismaService, useValue: prisma },
        { provide: JwtService, useValue: jwt },
        { provide: OtpProviderService, useValue: { sendOtp: jest.fn(), verifyOtp: jest.fn() } },
      ],
    }).compile();

    service = module.get(IdentityService);
  });

  // ── register ───────────────────────────────────────────────────────────────

  describe('register', () => {
    const baseDto = {
      name: 'Alice',
      email: 'alice@example.com',
      phone: '+1234567890',
      password: 'password123',
      role: RoleEnum.CLIENT,
    };

    it('creates CLIENT with ACTIVE status and returns token', async () => {
      prisma.$transaction.mockImplementation(async (fn: (tx: typeof prisma) => Promise<unknown>) =>
        fn(prisma),
      );
      prisma.user.create.mockResolvedValue(mockUser);
      prisma.client.create.mockResolvedValue({});

      const result = await service.register(baseDto);

      expect(prisma.user.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            role: RoleEnum.CLIENT,
            status: StatusEnum.ACTIVE,
          }),
        }),
      );
      expect(result.accessToken).toBe('jwt-token');
      expect(result.user.email).toBe(mockUser.email);
    });

    it('creates VENDOR with PENDING status', async () => {
      const vendorDto = {
        ...baseDto,
        role: RoleEnum.VENDOR,
        vendorName: 'My Shop',
        address: '1 Main St',
        lat: 48.85,
        lng: 2.35,
      };
      const vendorUser = { ...mockUser, role: RoleEnum.VENDOR, status: StatusEnum.PENDING };

      prisma.$transaction.mockImplementation(async (fn: (tx: typeof prisma) => Promise<unknown>) =>
        fn(prisma),
      );
      prisma.user.create.mockResolvedValue(vendorUser);
      prisma.vendor.create.mockResolvedValue({});

      await service.register(vendorDto);

      expect(prisma.user.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ status: StatusEnum.PENDING }),
        }),
      );
    });

    it('throws BadRequestException when ADMIN registers without department', async () => {
      await expect(
        service.register({ ...baseDto, role: RoleEnum.ADMIN }),
      ).rejects.toThrow(BadRequestException);
    });

    it('throws ConflictException on duplicate email/phone (P2002)', async () => {
      const p2002 = new Prisma.PrismaClientKnownRequestError('Unique constraint', {
        code: 'P2002',
        clientVersion: '0',
      });
      prisma.$transaction.mockRejectedValue(p2002);

      await expect(service.register(baseDto)).rejects.toThrow(ConflictException);
    });
  });

  // ── login ──────────────────────────────────────────────────────────────────

  describe('login', () => {
    it('returns token on valid credentials', async () => {
      prisma.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.login({ email: mockUser.email, password: 'password123' });

      expect(result.accessToken).toBe('jwt-token');
    });

    it('throws UnauthorizedException when user not found', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({ email: 'nobody@x.com', password: 'x' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('throws UnauthorizedException on wrong password', async () => {
      prisma.user.findUnique.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        service.login({ email: mockUser.email, password: 'wrong' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('throws UnauthorizedException when account is SUSPENDED', async () => {
      prisma.user.findUnique.mockResolvedValue({ ...mockUser, status: StatusEnum.SUSPENDED });

      await expect(
        service.login({ email: mockUser.email, password: 'password123' }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  // ── getProfile ─────────────────────────────────────────────────────────────

  describe('getProfile', () => {
    it('returns public user fields without passwordHash', async () => {
      // Simulate Prisma select returning only selected fields
      prisma.user.findUnique.mockResolvedValue(publicMockUser);

      const result = await service.getProfile(mockUser.id);

      expect(result.id).toBe(mockUser.id);
      expect(result.email).toBe(mockUser.email);
      expect((result as Record<string, unknown>).passwordHash).toBeUndefined();
    });

    it('throws UnauthorizedException when user not found', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.getProfile('no-id')).rejects.toThrow(UnauthorizedException);
    });
  });
});

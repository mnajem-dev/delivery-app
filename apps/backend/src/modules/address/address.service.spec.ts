import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../database/prisma.service';
import { AddressService } from './address.service';

const CLIENT_ID = 'client-uuid';
const OTHER_CLIENT_ID = 'other-client-uuid';
const ADDRESS_ID = 'address-uuid';

const makeAddress = (overrides: object = {}) => ({
  id: ADDRESS_ID,
  clientId: CLIENT_ID,
  label: 'Home',
  fullAddress: '1 Main St',
  lat: 48.85,
  lng: 2.35,
  isDefault: false,
  ...overrides,
});

const makePrisma = () => ({
  address: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    updateMany: jest.fn(),
    delete: jest.fn(),
    count: jest.fn(),
  },
  $transaction: jest.fn(),
});

describe('AddressService', () => {
  let service: AddressService;
  let prisma: ReturnType<typeof makePrisma>;

  beforeEach(async () => {
    prisma = makePrisma();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get(AddressService);
  });

  // ── create ─────────────────────────────────────────────────────────────────

  describe('create', () => {
    const dto = { label: 'Home', fullAddress: '1 Main St', lat: 48.85, lng: 2.35 };

    it('marks first address as default automatically', async () => {
      prisma.address.count.mockResolvedValue(0);
      prisma.$transaction.mockImplementation(async (fn: (tx: typeof prisma) => Promise<unknown>) => fn(prisma));
      prisma.address.updateMany.mockResolvedValue({});
      prisma.address.create.mockResolvedValue(makeAddress({ isDefault: true }));

      const result = await service.create(CLIENT_ID, dto);

      expect(prisma.address.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { clientId: CLIENT_ID }, data: { isDefault: false } }),
      );
      expect(result.isDefault).toBe(true);
    });

    it('does not force default when client already has addresses and isDefault not set', async () => {
      prisma.address.count.mockResolvedValue(2);
      prisma.$transaction.mockImplementation(async (fn: (tx: typeof prisma) => Promise<unknown>) => fn(prisma));
      prisma.address.updateMany.mockResolvedValue({});
      prisma.address.create.mockResolvedValue(makeAddress({ isDefault: false }));

      await service.create(CLIENT_ID, dto);

      expect(prisma.address.updateMany).not.toHaveBeenCalled();
    });

    it('sets default when dto.isDefault is true', async () => {
      prisma.address.count.mockResolvedValue(2);
      prisma.$transaction.mockImplementation(async (fn: (tx: typeof prisma) => Promise<unknown>) => fn(prisma));
      prisma.address.updateMany.mockResolvedValue({});
      prisma.address.create.mockResolvedValue(makeAddress({ isDefault: true }));

      await service.create(CLIENT_ID, { ...dto, isDefault: true });

      expect(prisma.address.updateMany).toHaveBeenCalled();
    });
  });

  // ── findAll ────────────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('returns addresses ordered default-first', async () => {
      const addresses = [makeAddress({ isDefault: true }), makeAddress({ id: 'addr-2' })];
      prisma.address.findMany.mockResolvedValue(addresses);

      const result = await service.findAll(CLIENT_ID);

      expect(prisma.address.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { clientId: CLIENT_ID } }),
      );
      expect(result).toHaveLength(2);
    });
  });

  // ── findOne ────────────────────────────────────────────────────────────────

  describe('findOne', () => {
    it('returns address when it belongs to client', async () => {
      prisma.address.findUnique.mockResolvedValue(makeAddress());

      const result = await service.findOne(CLIENT_ID, ADDRESS_ID);

      expect(result.id).toBe(ADDRESS_ID);
    });

    it('throws NotFoundException when address does not exist', async () => {
      prisma.address.findUnique.mockResolvedValue(null);

      await expect(service.findOne(CLIENT_ID, ADDRESS_ID)).rejects.toThrow(NotFoundException);
    });

    it('throws ForbiddenException when address belongs to another client', async () => {
      prisma.address.findUnique.mockResolvedValue(makeAddress({ clientId: OTHER_CLIENT_ID }));

      await expect(service.findOne(CLIENT_ID, ADDRESS_ID)).rejects.toThrow(ForbiddenException);
    });
  });

  // ── update ─────────────────────────────────────────────────────────────────

  describe('update', () => {
    it('updates and returns address', async () => {
      prisma.address.findUnique.mockResolvedValue(makeAddress());
      prisma.address.update.mockResolvedValue(makeAddress({ label: 'Work' }));

      const result = await service.update(CLIENT_ID, ADDRESS_ID, { label: 'Work' });

      expect(result.label).toBe('Work');
    });

    it('throws ForbiddenException for wrong client', async () => {
      prisma.address.findUnique.mockResolvedValue(makeAddress({ clientId: OTHER_CLIENT_ID }));

      await expect(service.update(CLIENT_ID, ADDRESS_ID, {})).rejects.toThrow(ForbiddenException);
    });
  });

  // ── setDefault ─────────────────────────────────────────────────────────────

  describe('setDefault', () => {
    it('unsets all and sets target as default', async () => {
      prisma.address.findUnique.mockResolvedValue(makeAddress());
      prisma.$transaction.mockImplementation(async (fn: (tx: typeof prisma) => Promise<unknown>) => fn(prisma));
      prisma.address.updateMany.mockResolvedValue({});
      prisma.address.update.mockResolvedValue(makeAddress({ isDefault: true }));

      const result = await service.setDefault(CLIENT_ID, ADDRESS_ID);

      expect(prisma.address.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { clientId: CLIENT_ID }, data: { isDefault: false } }),
      );
      expect(result.isDefault).toBe(true);
    });
  });

  // ── remove ─────────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('deletes address belonging to client', async () => {
      prisma.address.findUnique.mockResolvedValue(makeAddress());
      prisma.address.delete.mockResolvedValue({});

      await expect(service.remove(CLIENT_ID, ADDRESS_ID)).resolves.toBeUndefined();
      expect(prisma.address.delete).toHaveBeenCalledWith({ where: { id: ADDRESS_ID } });
    });

    it('throws ForbiddenException for wrong client', async () => {
      prisma.address.findUnique.mockResolvedValue(makeAddress({ clientId: OTHER_CLIENT_ID }));

      await expect(service.remove(CLIENT_ID, ADDRESS_ID)).rejects.toThrow(ForbiddenException);
    });
  });
});

import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { StatusEnum } from '../../database/generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CatalogService } from './catalog.service';
import { StorageService } from './storage/storage.service';

const VENDOR_ID = 'vendor-uuid';
const ITEM_ID = 'item-uuid';

const mockVendor = {
  userId: VENDOR_ID,
  name: 'My Shop',
  address: '1 Main St',
  lat: 48.85,
  lng: 2.35,
  isOpen: true,
  rating: 4.5,
  deliveryRadius: 5,
  commissionRate: 0.15,
  logoUrl: null,
};

const mockMenuItem = {
  id: ITEM_ID,
  vendorId: VENDOR_ID,
  name: 'Burger',
  priceMinor: 1200,
  priceCurrency: 'USD',
  category: 'Main',
  imageUrl: null,
  isAvailable: true,
  options: {},
};

const makePrisma = () => ({
  vendor: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  menuItem: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
});

const makeStorage = () => ({
  upload: jest.fn(),
  delete: jest.fn(),
});

describe('CatalogService', () => {
  let service: CatalogService;
  let prisma: ReturnType<typeof makePrisma>;
  let storage: ReturnType<typeof makeStorage>;

  beforeEach(async () => {
    prisma = makePrisma();
    storage = makeStorage();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatalogService,
        { provide: PrismaService, useValue: prisma },
        { provide: StorageService, useValue: storage },
      ],
    }).compile();

    service = module.get(CatalogService);
  });

  // ── listVendors ────────────────────────────────────────────────────────────

  describe('listVendors', () => {
    it('returns only ACTIVE vendors', async () => {
      prisma.vendor.findMany.mockResolvedValue([mockVendor]);

      const result = await service.listVendors({});

      expect(prisma.vendor.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ user: { status: StatusEnum.ACTIVE } }),
        }),
      );
      expect(result).toHaveLength(1);
    });

    it('filters by isOpen when provided', async () => {
      prisma.vendor.findMany.mockResolvedValue([]);

      await service.listVendors({ isOpen: true });

      expect(prisma.vendor.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ isOpen: true }),
        }),
      );
    });
  });

  // ── getVendor ──────────────────────────────────────────────────────────────

  describe('getVendor', () => {
    it('returns vendor with menu items', async () => {
      prisma.vendor.findUnique.mockResolvedValue({ ...mockVendor, menuItems: [] });

      const result = await service.getVendor(VENDOR_ID);

      expect(result.userId).toBe(VENDOR_ID);
    });

    it('throws NotFoundException when vendor does not exist', async () => {
      prisma.vendor.findUnique.mockResolvedValue(null);

      await expect(service.getVendor('no-id')).rejects.toThrow(NotFoundException);
    });
  });

  // ── updateVendor ───────────────────────────────────────────────────────────

  describe('updateVendor', () => {
    it('updates and returns vendor', async () => {
      prisma.vendor.findUnique.mockResolvedValue(mockVendor);
      prisma.vendor.update.mockResolvedValue({ ...mockVendor, isOpen: false });

      const result = await service.updateVendor(VENDOR_ID, { isOpen: false });

      expect(prisma.vendor.update).toHaveBeenCalledWith(
        expect.objectContaining({ where: { userId: VENDOR_ID } }),
      );
      expect(result.isOpen).toBe(false);
    });

    it('throws NotFoundException when vendor does not exist', async () => {
      prisma.vendor.findUnique.mockResolvedValue(null);

      await expect(service.updateVendor('no-id', {})).rejects.toThrow(NotFoundException);
    });
  });

  // ── uploadVendorLogo ───────────────────────────────────────────────────────

  describe('uploadVendorLogo', () => {
    const mockFile = { buffer: Buffer.from(''), mimetype: 'image/jpeg', size: 100, originalname: 'logo.jpg' } as Express.Multer.File;

    it('deletes old logo and uploads new one', async () => {
      const vendorWithLogo = { ...mockVendor, logoUrl: 'http://old/logo.jpg' };
      prisma.vendor.findUnique.mockResolvedValue(vendorWithLogo);
      storage.upload.mockResolvedValue('http://new/logo.jpg');
      prisma.vendor.update.mockResolvedValue({ ...vendorWithLogo, logoUrl: 'http://new/logo.jpg' });

      await service.uploadVendorLogo(VENDOR_ID, mockFile);

      expect(storage.delete).toHaveBeenCalledWith('http://old/logo.jpg');
      expect(storage.upload).toHaveBeenCalledWith(mockFile, 'vendors');
    });

    it('skips delete when no existing logo', async () => {
      prisma.vendor.findUnique.mockResolvedValue(mockVendor);
      storage.upload.mockResolvedValue('http://new/logo.jpg');
      prisma.vendor.update.mockResolvedValue({ ...mockVendor, logoUrl: 'http://new/logo.jpg' });

      await service.uploadVendorLogo(VENDOR_ID, mockFile);

      expect(storage.delete).not.toHaveBeenCalled();
    });
  });

  // ── createMenuItem ─────────────────────────────────────────────────────────

  describe('createMenuItem', () => {
    it('creates and returns new menu item', async () => {
      prisma.vendor.findUnique.mockResolvedValue(mockVendor);
      prisma.menuItem.create.mockResolvedValue(mockMenuItem);

      const result = await service.createMenuItem(VENDOR_ID, {
        name: 'Burger',
        priceMinor: 1200,
        priceCurrency: 'USD',
        category: 'Main',
      });

      expect(prisma.menuItem.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ vendorId: VENDOR_ID }) }),
      );
      expect(result.name).toBe('Burger');
    });

    it('throws NotFoundException when vendor does not exist', async () => {
      prisma.vendor.findUnique.mockResolvedValue(null);

      await expect(
        service.createMenuItem('no-id', { name: 'x', priceMinor: 100, priceCurrency: 'USD', category: 'x' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  // ── updateMenuItem ─────────────────────────────────────────────────────────

  describe('updateMenuItem', () => {
    it('updates item when vendor owns it', async () => {
      prisma.menuItem.findUnique.mockResolvedValue(mockMenuItem);
      prisma.menuItem.update.mockResolvedValue({ ...mockMenuItem, name: 'Cheeseburger' });

      const result = await service.updateMenuItem(VENDOR_ID, ITEM_ID, { name: 'Cheeseburger' });

      expect(result.name).toBe('Cheeseburger');
    });

    it('throws ForbiddenException when item belongs to another vendor', async () => {
      prisma.menuItem.findUnique.mockResolvedValue({ ...mockMenuItem, vendorId: 'other-vendor' });

      await expect(
        service.updateMenuItem(VENDOR_ID, ITEM_ID, { name: 'x' }),
      ).rejects.toThrow(ForbiddenException);
    });

    it('throws NotFoundException when item does not exist', async () => {
      prisma.menuItem.findUnique.mockResolvedValue(null);

      await expect(service.updateMenuItem(VENDOR_ID, ITEM_ID, {})).rejects.toThrow(NotFoundException);
    });
  });

  // ── deleteMenuItem ─────────────────────────────────────────────────────────

  describe('deleteMenuItem', () => {
    it('deletes image from storage then deletes record', async () => {
      const itemWithImage = { ...mockMenuItem, imageUrl: 'http://s3/img.jpg' };
      prisma.menuItem.findUnique.mockResolvedValue(itemWithImage);
      prisma.menuItem.delete.mockResolvedValue(itemWithImage);

      await service.deleteMenuItem(VENDOR_ID, ITEM_ID);

      expect(storage.delete).toHaveBeenCalledWith('http://s3/img.jpg');
      expect(prisma.menuItem.delete).toHaveBeenCalledWith({ where: { id: ITEM_ID } });
    });

    it('skips storage delete when no image', async () => {
      prisma.menuItem.findUnique.mockResolvedValue(mockMenuItem);
      prisma.menuItem.delete.mockResolvedValue(mockMenuItem);

      await service.deleteMenuItem(VENDOR_ID, ITEM_ID);

      expect(storage.delete).not.toHaveBeenCalled();
    });
  });
});

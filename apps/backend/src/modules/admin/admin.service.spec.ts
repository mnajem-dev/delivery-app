import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

// Prisma mock: findMany generates rows from skip/take so pagination is exercised;
// counts/aggregate return fixed values the assertions below expect.
const makePrisma = () => ({
  order: {
    findMany: jest.fn(({ skip = 0, take = 10 }: { skip?: number; take?: number } = {}) =>
      Promise.resolve(
        Array.from({ length: take }, (_, i) => ({ id: `order-${skip + i + 1}` })),
      ),
    ),
    count: jest.fn().mockResolvedValue(50),
    aggregate: jest.fn().mockResolvedValue({ _sum: { totalMinor: 1234500 } }),
  },
  user: {
    count: jest.fn().mockResolvedValue(20),
    findUnique: jest.fn(({ where: { id } }: { where: { id: string } }) =>
      Promise.resolve(
        id === 'non-existent'
          ? null
          : { id, name: 'U', email: 'u@example.com', phone: '+10000000000', status: 'ACTIVE' },
      ),
    ),
    update: jest.fn(({ where: { id } }: { where: { id: string } }) =>
      Promise.resolve({ id, name: 'U', email: 'u@example.com', phone: '+10000000000', status: 'SUSPENDED' }),
    ),
  },
  vendor: { count: jest.fn().mockResolvedValue(5) },
});

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        { provide: PrismaService, useValue: makePrisma() },
      ],
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOrders', () => {
    it('should return paginated orders with default parameters', async () => {
      const result = await service.getOrders();
      expect(result.data).toHaveLength(10);
      expect(result.meta.currentPage).toBe(1);
      expect(result.meta.itemsPerPage).toBe(10);
      expect(result.meta.totalItems).toBe(50);
    });

    it('should paginate correctly for second page', async () => {
      const result = await service.getOrders(2, 5);
      expect(result.data).toHaveLength(5);
      expect(result.meta.currentPage).toBe(2);
      expect(result.meta.itemsPerPage).toBe(5);
      expect(result.data[0].id).toBe('order-6');
    });
  });

  describe('getStats', () => {
    it('should return aggregated stats', async () => {
      const result = await service.getStats();
      expect(result).toHaveProperty('totalOrders', 50);
      expect(result).toHaveProperty('totalRevenue');
      expect(result).toHaveProperty('ordersByStatus');
      expect(result).toHaveProperty('activeUsersCount');
      expect(result).toHaveProperty('suspendedUsersCount');
    });
  });

  describe('suspendUser', () => {
    it('should successfully suspend a valid user', async () => {
      const result = await service.suspendUser('user-1');
      expect(result.id).toBe('user-1');
      expect(result.status).toBe('SUSPENDED');
    });

    it('should throw NotFoundException for invalid user ID', async () => {
      await expect(service.suspendUser('non-existent')).rejects.toThrow(NotFoundException);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { NotFoundException } from '@nestjs/common';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService],
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOrders', () => {
    it('should return paginated orders with default parameters', () => {
      const result = service.getOrders();
      expect(result.data).toHaveLength(10);
      expect(result.meta.currentPage).toBe(1);
      expect(result.meta.itemsPerPage).toBe(10);
      expect(result.meta.totalItems).toBe(50);
    });

    it('should paginate correctly for second page', () => {
      const result = service.getOrders(2, 5);
      expect(result.data).toHaveLength(5);
      expect(result.meta.currentPage).toBe(2);
      expect(result.meta.itemsPerPage).toBe(5);
      expect(result.data[0].id).toBe('order-6');
    });
  });

  describe('getStats', () => {
    it('should return aggregated stats', () => {
      const result = service.getStats();
      expect(result).toHaveProperty('totalOrders', 50);
      expect(result).toHaveProperty('totalRevenue');
      expect(result).toHaveProperty('ordersByStatus');
      expect(result).toHaveProperty('activeUsersCount');
      expect(result).toHaveProperty('suspendedUsersCount');
    });
  });

  describe('suspendUser', () => {
    it('should successfully suspend a valid user', () => {
      const result = service.suspendUser('user-1');
      expect(result.message).toContain('suspended successfully');
      expect(result.user.suspended).toBe(true);
    });

    it('should throw NotFoundException for invalid user ID', () => {
      expect(() => service.suspendUser('non-existent')).toThrow(NotFoundException);
    });
  });
});

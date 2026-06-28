import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import {
  FIXTURE_IDS,
  FIXTURE_PASSWORD,
  fixtureMenuItems,
  fixtureUsers,
  fixtureVendors,
} from '@delivery-app/shared-types';
import { PrismaClient, RoleEnum } from '../generated/prisma/client';

/**
 * Idempotent dev seed (upserts) built from the SAME fixtures the mock API client
 * uses (packages/shared-types/src/fixtures.ts). Safe to run repeatedly.
 *
 *   pnpm --filter @delivery-app/backend run db:seed
 *
 * Logins: any fixture email (e.g. maya@example.com) / password "password123".
 */
async function main(): Promise<void> {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not set');

  const pool = new Pool({ connectionString });
  const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

  try {
    const passwordHash = await bcrypt.hash(FIXTURE_PASSWORD, 12);

    for (const u of fixtureUsers) {
      await prisma.user.upsert({
        where: { id: u.id },
        update: {},
        create: {
          id: u.id,
          name: u.name,
          email: u.email,
          phone: u.phone,
          passwordHash,
          role: u.role as unknown as RoleEnum,
          status: 'ACTIVE',
        },
      });
    }

    // Role profiles
    await prisma.client.upsert({
      where: { userId: FIXTURE_IDS.client },
      update: {},
      create: { userId: FIXTURE_IDS.client },
    });
    await prisma.driver.upsert({
      where: { userId: FIXTURE_IDS.driver },
      update: {},
      create: {
        userId: FIXTURE_IDS.driver,
        status: 'OFFLINE',
        approvalStatus: 'APPROVED',
      },
    });
    await prisma.admin.upsert({
      where: { userId: FIXTURE_IDS.admin },
      update: {},
      create: { userId: FIXTURE_IDS.admin, department: 'operations' },
    });

    for (const v of fixtureVendors) {
      await prisma.vendor.upsert({
        where: { userId: v.userId },
        update: {},
        create: {
          userId: v.userId,
          name: v.name,
          address: v.address,
          lat: v.lat,
          lng: v.lng,
          isOpen: v.isOpen,
          rating: v.rating,
          deliveryRadius: v.deliveryRadius,
          commissionRate: 0.15,
        },
      });
    }

    for (const m of fixtureMenuItems) {
      await prisma.menuItem.upsert({
        where: { id: m.id },
        update: {},
        create: {
          id: m.id,
          vendorId: m.vendorId,
          name: m.name,
          priceMinor: m.priceMinor,
          priceCurrency: m.priceCurrency,
          category: m.category,
          isAvailable: m.isAvailable,
          options: {},
        },
      });
    }

    console.log(
      `[seed] done: ${fixtureUsers.length} users, ${fixtureVendors.length} vendors, ${fixtureMenuItems.length} menu items`,
    );
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error('[seed] failed:', err);
  process.exit(1);
});

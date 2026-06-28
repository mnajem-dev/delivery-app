# Working in parallel — don't wait on each other

Stories depend on each other (order → dispatch → driver; everything → realtime; totals → fee
config). To avoid being blocked, **build against the shared contract, not against someone else's
unfinished code.** Three tools make this possible.

## 1. The contract lives in `@delivery-app/shared-types`
Every request/response shape is a TypeScript type there (`dtos.ts`). Both the backend and the apps
import the SAME types, so they can't drift. If you're building an endpoint, implement it to match
the DTO. If you're building a screen, import the DTO and code against it — even before the endpoint
exists.

```ts
import { VendorSummaryDto, CartDto, RideOfferDto } from '@delivery-app/shared-types';
```

## 2. The mock API client — build screens with no backend
`@delivery-app/api-client` exposes one typed surface for every endpoint, plus an **offline mock**
backed by sample data. Flip a flag and your screen works with zero backend:

```ts
import { createApi, createMockApiClient } from '@delivery-app/api-client';

const USE_MOCK = true; // ← while the backend endpoint isn't ready
const api = USE_MOCK ? createMockApiClient() : createApi('http://localhost:3000', token);

const vendors = await api.catalog.listVendors();   // fixtures now, real data later — same code
const offers  = await api.drivers.listOffers();    // US-602 not built yet? still works via mock
```

When the real endpoint lands, set `USE_MOCK = false` — nothing else changes. Endpoints marked
*PLANNED* in the client (drivers, vendor intake, ratings) have no backend yet; use the mock for them.

## 3. Seed data — the running app isn't empty
`pnpm --filter @delivery-app/backend run db:seed` (idempotent) loads the SAME fixtures the mock
uses: 2 vendors + menu items, a client, a driver, an admin. So you can place a real order, test a
real vendor, etc. Logins: any fixture email (e.g. `maya@example.com`) / password `password123`.

## Concrete unblocks
- **Order summary (US-302)** no longer waits on **fee config (US-803)** — totals use a shared
  `DEFAULT_FEES` via `computeOrderTotals()`. When US-803 ships it passes real fees to the same
  function; the UI doesn't change.
- **Driver/dispatch (US-602/604/605)** screens build against `RideOfferDto`/`EarningsDto` fixtures
  before realtime (NFR-01) exists.
- **Catalog/cart/order** interns develop against seeded vendors instead of an empty DB.

## Rule of thumb
> If you're blocked waiting for someone, you're probably coding against their implementation instead
> of the contract. Import the type, use the mock, keep moving — integrate when their PR merges.

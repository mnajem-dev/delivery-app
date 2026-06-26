#!/bin/sh
# Applies pending DB migrations (safe to run on every boot), then starts the API.
# Postgres readiness is guaranteed by compose `depends_on: service_healthy`.
set -e

echo "[entrypoint] applying database migrations..."
pnpm --filter @delivery-app/backend exec prisma migrate deploy

echo "[entrypoint] starting API..."
exec pnpm --filter @delivery-app/backend run start:dev

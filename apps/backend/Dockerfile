# Dev/onboarding image for the backend API.
# Goal: `docker compose up` runs the API with zero local Node/pnpm/config needed.
# Base `node:22` (buildpack-deps) ships the build tools bcrypt / prisma engines may need.
FROM node:22

# pnpm is pinned via the root package.json "packageManager" field; corepack activates it.
RUN corepack enable
WORKDIR /app

# Copy only what the backend needs (root manifests + workspace libs + the backend app).
# Keeps the build context small and the layer cache warm.
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY apps/backend ./apps/backend

# Install just the backend and its workspace deps (shared-types), reproducibly.
RUN pnpm install --frozen-lockfile --filter @delivery-app/backend...

# Generate the Prisma client (schema lives under src/database/prisma).
RUN pnpm --filter @delivery-app/backend exec prisma generate

EXPOSE 3000

# Entrypoint applies migrations (idempotent) then starts the API.
ENTRYPOINT ["./apps/backend/docker-entrypoint.sh"]

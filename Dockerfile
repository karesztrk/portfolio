FROM node:20-slim AS base
# Enable Corepack to use pnpm
RUN corepack enable
# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
WORKDIR /app
COPY package.json pnpm-lock.yaml ./

# Create a new image for production
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Create a new image for development
FROM base AS build-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN pnpm run build

FROM httpd:2.4-alpine AS runtime
# Copy production dependencies from the prod stage
# COPY --from=prod-deps /app/node_modules /app/node_modules
# Copy the compiled code from the build stage
COPY --from=build /app/dist /usr/local/apache2/htdocs/

EXPOSE 80

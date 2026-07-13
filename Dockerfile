FROM node:25-alpine AS base
WORKDIR /app

FROM base AS pnpm
ENV HUSKY=0
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

FROM pnpm AS prod-deps
COPY ./.husky/install.mjs ./.husky/install.mjs
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM pnpm AS build
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD [ "node", "./dist/server/entry.mjs" ]

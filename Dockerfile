FROM oven/bun:1-alpine
WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY index.ts ./
COPY public ./public

ENV NODE_ENV=production
USER bun
EXPOSE 3000/tcp
CMD ["bun", "run", "index.ts"]

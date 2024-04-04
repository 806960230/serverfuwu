FROM node:18 AS builder

COPY . .

RUN npm install pnpm -g --registry=http://registry.npm.taobao.org && pnpm -v && pnpm install --force && pnpm run build

FROM node:18

WORKDIR /opt/app

COPY --from=builder ./node_modules ./node_modules
COPY --from=builder ./dist ./dist

EXPOSE 3001

ENV NODE_ENV=production

CMD ["node", "dist/main"]

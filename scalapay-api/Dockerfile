FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:lts-alpine as production

WORKDIR /app

COPY package.json package-lock.json ./

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 5001

ENV JWT_SECRET=SCALAPAY_SUPER_SECRET \
  SCALAPAY_SECRET=qhtfs87hjnc12kkos \
  PORT=5001

CMD ["yarn", "start:prod"]

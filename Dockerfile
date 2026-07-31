FROM node:22-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma

# ---- Development ----
FROM base AS development
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# ---- Build ----
FROM base AS build
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

# ---- Production ----
FROM node:22-alpine AS production
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY package*.json ./
COPY prisma ./prisma
RUN npm install --omit=dev
RUN npx prisma generate
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]
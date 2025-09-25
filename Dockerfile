# Stage 1: build the application
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json vite.config.ts tailwind.config.ts postcss.config.mjs ./
COPY src ./src
COPY public ./public
COPY index.html ./

RUN npm install
RUN npm run build

# Stage 2: serve the built assets
FROM node:20

WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN npm install --global serve

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l", "4173"]

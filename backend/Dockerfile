FROM node:20-alpine
WORKDIR /app

# Cài OpenSSL
RUN apk add --no-cache openssl openssl-dev

# Cài dependencies (bao gồm devDeps để build TS)
COPY package*.json ./
RUN npm install

# Copy toàn bộ source
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript → dist/
RUN npm run build

# Kiểm tra build thành công
RUN ls -la dist/

EXPOSE 4000
CMD ["sh", "-c", "npx prisma db push && node dist/index.js"]
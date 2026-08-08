FROM node:24-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

ARG NEXT_PUBLIC_PASSWORD
ENV NEXT_PUBLIC_PASSWORD=${NEXT_PUBLIC_PASSWORD}

ARG NEXT_PUBLIC_EMAIL
ENV NEXT_PUBLIC_EMAIL=${NEXT_PUBLIC_EMAIL}

ARG NEXT_PUBLIC_EMAIL_TO
ENV NEXT_PUBLIC_EMAIL_TO=${NEXT_PUBLIC_EMAIL_TO}

RUN npm run build

EXPOSE 3000

CMD npm run payload migrate && npm start

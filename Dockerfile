FROM node:19-alpine AS builder

WORKDIR /app
COPY . .
RUN npm --force install && npm run build

FROM nginx:1.23.3

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
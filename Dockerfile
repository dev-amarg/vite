FROm node:20-alpine as builder

workdir /app

copy package*.json .

run npm ci

copy . .

run npm run build

from nginx:alpine

copy --from=builder /app/dist /usr/share/nginx/html

expose 80

cmd ["nginx", "-g", "daemon off; "]

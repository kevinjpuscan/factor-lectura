FROM node:14 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run generate


FROM nginx
COPY /configs/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
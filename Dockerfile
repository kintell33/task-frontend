FROM node:16-alpine AS build
LABEL stage=build
WORKDIR /app
COPY . ./
RUN npm ci --silent
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD nginx -g 'daemon off;'

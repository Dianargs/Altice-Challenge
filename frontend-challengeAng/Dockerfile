FROM node:alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.23.3-alpine
COPY --from=build-step /app/dist/frontend-challenge-ang /usr/share/nginx/html
EXPOSE 4200:80
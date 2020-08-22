
FROM node:11.8.0 as build-stage
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build-prod -- --output-path=./dist/ --configuration $configuration


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/dist /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

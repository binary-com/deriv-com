FROM nginx:alpine
ARG DIRECTUS_AUTH_TOKEN
ENV DIRECTUS_AUTH_TOKEN=${DIRECTUS_AUTH_TOKEN}
COPY ./public /usr/share/nginx/html
COPY ./deriv.com.conf /etc/nginx/conf.d/default.conf

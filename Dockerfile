FROM nginx_pagespeed
COPY ./public /usr/share/nginx/html
COPY ./deriv.com.conf /etc/nginx/conf.d/default.conf

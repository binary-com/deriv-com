FROM regentmarkets/nginx-pagespeed:poc
COPY ./deriv.com.conf /etc/nginx/conf.d/default.conf

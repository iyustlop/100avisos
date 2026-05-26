FROM nginx:stable-alpine

LABEL maintainer="maintainer@example.com"

# Replace default nginx conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

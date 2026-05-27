FROM nginx:stable-alpine

LABEL maintainer="maintainer@example.com"

# Install main nginx config (must be placed at /etc/nginx/nginx.conf)
# so directives like `worker_processes` are allowed in the main context.
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

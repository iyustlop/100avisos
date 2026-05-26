FROM node:26-alpine

WORKDIR /usr/src/app

# Install system deps (curl for healthcheck)
RUN apk add --no-cache curl

# Install production dependencies
COPY package*.json ./
# Use npm install to avoid requiring a lockfile
RUN npm install --omit=dev

# Copy compiled build (project already contains build/)
COPY build/ ./build/
COPY .env ./

EXPOSE 3001

CMD ["npm", "start"]

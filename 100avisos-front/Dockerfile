FROM node:26-alpine

WORKDIR /usr/src/app

# Install deps (including dev deps needed for build)
COPY package*.json ./
# Use npm install to work without a lockfile; include legacy peer deps to avoid peer conflicts
RUN npm install --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--port", "3000", "--strictPort"]

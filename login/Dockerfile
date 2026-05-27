FROM node:26-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
# Use npm install to avoid requiring a lockfile
RUN npm install --omit=dev

# Bundle app source
COPY . .

ENV NODE_ENV=production
EXPOSE 4000

CMD ["npm", "start"]

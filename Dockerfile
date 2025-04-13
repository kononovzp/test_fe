# BASE IMAGES
FROM node:22.12.0-bookworm AS base

# BUILDER IMAGES
FROM base AS build
WORKDIR /build

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY --chown=node:node package*.json ./
RUN npm install

# Copy the rest of the application files
COPY --chown=node:node . .

# Build the Next.js application for production
RUN npm run build

# PROJECT IMAGES
FROM base AS project
WORKDIR /project

# Copy the package.json (and package-lock.json or yarn.lock) to install production dependencies
COPY --chown=node:node package*.json ./

# Copy the necessary build artifacts from the build stage
COPY --chown=node:node --from=build /build/.next ./.next
COPY --chown=node:node --from=build /build/node_modules ./node_modules
COPY --chown=node:node --from=build /build/public ./public

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Set the entrypoint to start the Next.js application
ENTRYPOINT ["npm", "run", "start"]

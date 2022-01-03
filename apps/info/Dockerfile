ARG NODE_VERSION=16
ARG PROJECT_NAME=info
ARG DEVELOPMENT_IMAGE=node:${NODE_VERSION}-buster-slim
ARG PRODUCTION_IMAGE=node:${NODE_VERSION}-buster-slim
ARG RELEASE_IMAGE=satantime/puppeteer-node:${NODE_VERSION}-buster-slim

###### development image ######
FROM ${DEVELOPMENT_IMAGE} as development
ARG PROJECT_NAME
WORKDIR /app
# Dependencies
COPY package*.json ./
RUN npm install
# Build
COPY . .
RUN npm run build ${PROJECT_NAME}

###### production image ######
FROM ${PRODUCTION_IMAGE} as production
# Install prerequisites
RUN apt-get update && apt-get install -y curl
WORKDIR /app
COPY package*.json ./
RUN curl -sf https://gobinaries.com/tj/node-prune | sh && \
    npm install --only=production && \
    /usr/local/bin/node-prune

###### release image ######
FROM ${RELEASE_IMAGE} as release
ARG PROJECT_NAME
ENV NODE_ENV=production
ENV PROJECT_NAME ${PROJECT_NAME}
# user
USER node
# Copy app
WORKDIR /app
COPY --from=production /app/node_modules ./node_modules
COPY --from=development /app/package.json /app/package.json
COPY --from=development /app/dist/apps/${PROJECT_NAME} /app
# Application
ENV PORT=8080
EXPOSE 8080
CMD npm run start:prod

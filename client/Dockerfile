FROM node:17-alpine
WORKDIR /app
COPY package*.json /app

RUN yarn --silent
RUN yarn add -g react-scripts@5.0.1

COPY . ./


CMD ["yarn", "start"]
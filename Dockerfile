FROM alpine:latest

RUN apk add --no-cache nodejs
RUN apk add --no-cache nodejs-npm
RUN mkdir /app

WORKDIR /app
COPY package.json .
RUN npm set progress=false && npm config set depth 0 && npm install
COPY . .
RUN npm config set mockbin:redis redis://redis:6379
EXPOSE 8080
ENTRYPOINT ["npm", "start", "--"]

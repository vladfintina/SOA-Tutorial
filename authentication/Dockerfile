FROM node:lts-alpine

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY authentication ./

ENTRYPOINT node main.js

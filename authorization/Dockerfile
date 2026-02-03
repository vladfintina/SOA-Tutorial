FROM node:lts-alpine

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY authorization ./

ENTRYPOINT node main.js
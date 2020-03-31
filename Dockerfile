# CODE A DAY DOCKER
FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

ENV THEME_APP=light

CMD ["npm", "run", "dev"]
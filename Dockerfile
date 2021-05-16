FROM node:14-alpine

RUN npm install pm2 -g

WORKDIR /app
COPY ecosystem.config.js .
COPY package*.json ./
RUN npm ci
RUN npm audit fix
COPY . .
RUN npm run lint
RUN npm run build

EXPOSE 8899

CMD [ "pm2-runtime", "ecosystem.config.js" ]
FROM node:latest

WORKDIR /content
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "dist/server.js" ]
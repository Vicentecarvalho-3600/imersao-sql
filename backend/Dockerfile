FROM node:16.18.1-alpine

WORKDIR /app

COPY . .

RUN npm install -g nodemon

RUN npm install

EXPOSE 5555

CMD [ "npm", "run", "dev" ]
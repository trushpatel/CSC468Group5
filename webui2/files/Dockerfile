FROM node:14-slim
RUN npm i express react react-router-dom cors pg jsonwebtoken bcrypt dotenv
COPY client/ /client
COPY server/ /server
ENV PATH /client/node_modules/.bin:$PATH
COPY /client/package.json ./
COPY /client/package-lock.json ./
RUN npm install
COPY . .

COPY /server/package.json ./
COPY /server/package-lock.json ./

RUN npm install --production

COPY /server/.env ./

EXPOSE 3000
EXPOSE 5000
CMD node /server/index.js && npm start --prefix /client

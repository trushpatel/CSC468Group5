FROM node:4-slim
RUN npm i express react react-router-dom
COPY files/ /files/client
COPY files/ /files/server
WORKDIR /client
ENV PATH /client/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
CMD ["PORT=80", "npm", "start"]
EXPOSE 80

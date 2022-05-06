FROM node:14-slim
RUN npm i express react react-router-dom cors pg jsonwebtoken bcrypt dotenv
COPY client/ /client
COPY nodescript.sh /

RUN bash nodescript.sh

EXPOSE 3000

CMD npm start --prefix /client

FROM node:14-slim
RUN npm i express react react-router-dom cors pg jsonwebtoken bcrypt dotenv
COPY server/ /server
COPY nodescript.sh /
COPY database.sh /

RUN bash nodescript.sh
RUN bash database.sh

EXPOSE 5000
EXPOSE 5432

CMD node /server/index.js

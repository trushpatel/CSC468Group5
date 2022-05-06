FROM node:14-slim
RUN npm i express cors pg jsonwebtoken bcrypt dotenv
COPY server/ /server
COPY nodescript.sh /
COPY database.sh /

RUN bash nodescript.sh
RUN bash database.sh

EXPOSE 5000

CMD node /server/index.js

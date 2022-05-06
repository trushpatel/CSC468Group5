FROM node:14-slim
RUN npm i express react react-router-dom cors pg jsonwebtoken bcrypt dotenv
COPY client/ /client
COPY server/ /server
#COPY nodescript.sh /
#COPY database.sh /
ENV PATH /client/node_modules/.bin:$PATH

#RUN bash nodescript.sh

EXPOSE 3000
#EXPOSE 5000
#EXPOSE 5432

# CMD node /server/index.js &&\ npm start --prefix /client

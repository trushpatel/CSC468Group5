FROM node:14-slim
RUN npm i express cors pg jsonwebtoken bcrypt dotenv
COPY database.sh /

EXPOSE 5000
RUN bash database.sh

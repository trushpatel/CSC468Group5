FROM node:4-slim
RUN npm i express react react-router-dom
COPY files/ /files/client
COPY files/ /files/server
WORKDIR "/client"
CMD ["PORT=80", "npm", "start"]
EXPOSE 80

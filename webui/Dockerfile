FROM node:4-slim
RUN npm install express
RUN npm install react
RUN npm i react-router-dom --save
COPY files/ /files/
COPY webui.js /
CMD ["node", "/webui.js"]
EXPOSE 80

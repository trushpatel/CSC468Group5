FROM node:4-slim
RUN npm install express
RUN npm install live-server
RUN npm install react
RUN npm install react-router-dom
COPY files/ /files/
COPY webui.js /
CMD ["node", "/webui.js"]
EXPOSE 80

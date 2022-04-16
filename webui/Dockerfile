FROM node:4-slim
RUN npm install express
RUN npm install react
RUN npm install react-router-dom
COPY files/ /files/
COPY webui.js /
CMD ["cd", "files"]
RUN npm install
RUN npm start
EXPOSE 80

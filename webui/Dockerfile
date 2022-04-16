FROM node:4-slim
RUN npm install express
COPY files/ /files/
CMD ["node", "webui.js"]
COPY webui.js /
CMD ["node", "/webui.js"]
EXPOSE 80

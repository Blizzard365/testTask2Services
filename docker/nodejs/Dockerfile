FROM node:18-alpine

WORKDIR /app

COPY ../../nodeService/package.json ../../nodeService/package-lock.json ./
RUN npm install --production

COPY ../../nodeService ../../docker ./

EXPOSE 3000

CMD ["node", "./src/app.js"]

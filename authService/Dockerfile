FROM node:20.16.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY .env . 
COPY . .

EXPOSE 6690

CMD ["node", "app.js"]

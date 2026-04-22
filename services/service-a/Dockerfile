FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src
COPY tests ./tests

EXPOSE 3001
CMD ["npm", "start"]

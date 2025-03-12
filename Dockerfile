FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
FROM node:21.1.0-alpine
WORKDIR /fixmaster
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]
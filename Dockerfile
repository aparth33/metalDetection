FROM node:alpine

WORKDIR /usr/src/lifemaxx/server/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 5002

CMD ["npm","start"]
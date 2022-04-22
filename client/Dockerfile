FROM node:16-alpine3.12

WORKDIR /usr/src/lifemaxx/client/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm","start"]
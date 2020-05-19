FROM node:12.16.3
WORKDIR /riftuo/server
COPY package*.json /riftuo/server/
RUN npm install
COPY . /riftuo/server

EXPOSE 5000

CMD ["npm", "run", "dev"]
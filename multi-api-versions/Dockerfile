FROM node

COPY . .

RUN npm install
RUN npm run build

ENTRYPOINT npm run start:prod
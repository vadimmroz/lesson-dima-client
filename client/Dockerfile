FROM node:20-alpine3.22
WORKDIR /client
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm" ,"run" ,"preview", "--", "--host"]
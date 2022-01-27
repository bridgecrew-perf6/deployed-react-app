# FROM node:current
FROM node:14-alpine AS development
ENV NODE_ENV development
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# add app
COPY . ./
# Expose port
EXPOSE 3000
# start app
CMD ["npm","run","start"]
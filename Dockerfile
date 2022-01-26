FROM node:current
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# build the source code 
#RUN npm run build
# add app
COPY . ./
#expose
#EXPOSE 80
# start app
CMD ["npm","run","start"]
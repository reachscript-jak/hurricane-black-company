FROM node:12-alpine

ENV APP_HOME /hurricane-black-company
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY package.json $APP_HOME/
COPY yarn.lock $APP_HOME/
RUN yarn install

COPY . $APP_HOME

# RUN yarn build

CMD ["yarn", "start"]
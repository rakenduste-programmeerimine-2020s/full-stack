FROM node:14.3-alpine

ENV HOME=/home/node

USER node

RUN mkdir -p $HOME/app
WORKDIR $HOME/app

COPY . $HOME/app

RUN yarn install

ENTRYPOINT ["npm"]
CMD ["start"]

EXPOSE 3000

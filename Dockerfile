FROM node:lts-alpine as base

WORKDIR /usr/src/app

ARG DOTENV_ME

COPY package.json yarn.lock ./

RUN yarn

RUN yarn global add pm2

COPY . .

RUN npx --yes dotenv-vault@latest pull --dotenvMe $DOTENV_ME

EXPOSE 8080

ENV PORT=8080


FROM base as test

CMD [ "yarn", "test" ]

FROM base as prod
ENV NODE_ENV=production

CMD [ "pm2-runtime", "index.js" ]


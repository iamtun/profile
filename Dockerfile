FROM node:18-alpine

WORKDIR /app/dica-frontend-v3-dev

COPY package.json yarn.lock ./

RUN apk add --no-cache git \
    && yarn install --frozen-lockfile \
    && yarn cache clean

COPY . .
RUN yarn build

# assign hostname when update nextjs 13.4.16
ENV HOSTNAME 0.0.0.0 

CMD ["yarn", "start"]
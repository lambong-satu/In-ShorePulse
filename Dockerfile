FROM nodered/node-red:latest

USER root
WORKDIR /data

COPY package.json /data/package.json
RUN npm install --omit=dev

COPY flows.json /data/flows.json
COPY settings.js /data/settings.js

RUN chown -R node-red:root /data

EXPOSE 1880

ENTRYPOINT []
USER node-red
CMD ["npm", "start"]

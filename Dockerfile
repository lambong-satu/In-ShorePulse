FROM nodered/node-red:latest

WORKDIR /data

COPY package.json /data/package.json
RUN npm install --omit=dev

COPY flows.json /data/flows.json
COPY settings.js /data/settings.js

EXPOSE 1880

ENTRYPOINT []
CMD ["npm", "start"]

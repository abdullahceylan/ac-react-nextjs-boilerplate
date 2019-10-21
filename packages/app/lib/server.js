const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const server = express();

const dbConfig = require('../../../.firebase/config').dbConfig;

const firebase = admin
  .initializeApp(
    {
      credential: admin.credential.cert(require('../../../.firebase/firebase-service-key.json')),
      databaseURL: dbConfig.databaseURL,
    },
    'server',
  )
  .firestore();

server.use(cors());
server.use(bodyParser.json());
server.use((req, _res, next) => {
  req.firebaseServer = firebase;
  next();
});

module.exports = server;

const express = require('express');
const chalk = require('chalk');
const boxen = require('boxen');

const port = process.env.PORT || 9999;

const logger = console.log;

/**
 * OPTIONS
 */
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'gray',
};

const listenMessage = (p = port) =>
  chalk.gray(
    `
  API server is running.
  ${chalk.green.bold('API Healthcheck')} → ${chalk.green(`http://localhost:${p}/api/healthcheck`)}
  ${chalk.green.bold('API')} → ${chalk.green(`http://localhost:${p}`)} 
`,
  );

/**
 * ROUTING
 */

const server = express();
const api = require('./routes/api');

server.use(api);

server.listen(port, err => {
  if (err) {
    throw err.message;
  }
  logger(boxen(listenMessage(), boxOptions));
});

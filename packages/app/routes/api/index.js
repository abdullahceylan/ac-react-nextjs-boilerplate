try {
  const server = require('../../lib/server');
  const package = require('../../package.json');

  const ENV = process.env.NODE_ENV;

  const handle = (req, res, next) => {
    res.sendStatus(404);
  };

  server.get('/api/healthcheck', (req, res) => {
    res.sendStatus(200);
  });

  server.get('/api/me', (req, res) => {
    res.json({
      user: {
        firstname: 'Abdullah',
        lastname: 'Ceylan',
        country: 'U.K.',
      },
    });
  });

  server.get('/api/version', (req, res) => {
    res.json({
      version: package.version,
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  module.exports = server;
} catch (error) {
  // eslint-disable-next-line no-console
  console.log('API Error', error);
}

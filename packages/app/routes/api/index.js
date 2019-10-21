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

  // server.get("/cities/*", (req, res) => {
  //   app.render(req, res, "/post", {
  //     fullUrl: req.originalUrl
  //   });
  // });

  server.get('/api/cities', (req, res) => {
    req.firebaseServer
      .collection(`cities`)
      .get()
      .then(snapshot => {
        const cities = [];

        snapshot.forEach(doc => {
          cities.push(doc.data());
        });

        res.json({ cities });
      })
      .catch(error => {
        res.json({ error });
      });
  });

  server.get('/api/city/:name', (req, res) => {
    req.firebaseServer
      .collection(`cities`)
      .get()
      .then(snapshot => {
        let city = {};
        const { name } = req.params;

        snapshot.forEach(doc => {
          const data = doc.data();
          console.log('data', data);
          console.log('req.params', req.params);
          if (name && data.name.toLowerCase() === name.toLowerCase()) {
            city = data;
          }
        });

        res.json({ ...city });
      })
      .catch(error => {
        res.json({ error });
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

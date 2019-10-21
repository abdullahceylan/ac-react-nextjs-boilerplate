# AC React and Next.js Boilerplate

- [react](https://reactjs.org/)
- [nextjs](https://nextjs.org/)
- [zeit.co/now](https://zeit.co/now)

## Setup project
### Installing dependencies
- `git clone https://github.com/abdullahceylan/ac-react-nextjs-boilerplate`
- `cd ac-react-nextjs-boilerplate`
- `yarn`

### Firebase configuration
1. Create a project in [Firebase](https://firebase.google.com/docs/firestore/quickstart).
2. Create a new database and add your Firebase Service Account json in `/packages/app/.firebase/credentials.json`.
3. Update your `databaseURL` in `/packages/app/.firebase/config.js`.
4. Modify the route in `/packages/app/routes/api/index.js` to match your database structure.
5. `now.json` as well as `/packages/www/pages/city.js` can then be modified to match your database structure.

## Tasks

- `yarn dev` start web development with API server
- `yarn dev:www` start web development
- `yarn dev:api` start API server
- `yarn env dev` copy `.env.dev` to `.env`
- `yarn env prod` copy `.env.prod` to `.env`
- `yarn build` local build
- `yarn start` local start
- `yarn reset` rimraf 'yarn.lock' 'node_modules' '\*\*/node_modules' && yarn
- `now dev` start web development with API server with the same port and route
- `now` deploy to [zeit.co/now](https://zeit.co/now)

## Tips

- `yarn dev`, then open [localhost:9999/api/version](http://localhost:9999/api/version) to test the API server
- `now dev`, then open [localhost:3000/api/version](http://localhost:3000/api/version) to test the API server

## Links

- [abdullahceylan.com](https://abdullahceylan.com)
- [twitter.com/ceylanabdullah](https://twitter.com/ceylanabdullah)

const fbMigrate = require('../functions');
const config = require('../../.firebase/config');

const options = {
  config,
  action: 'import',
  env: 'dev',
  filePath: './scripts/backup.json',
};

fbMigrate(options);

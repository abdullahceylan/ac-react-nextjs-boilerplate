const fbMigrate = require('../functions');
const config = require('../../.firebase/config');

const options = {
  config,
  action: 'export',
  env: 'dev',
  filePath: './scripts/backup.json',
};

fbMigrate(options);

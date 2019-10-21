const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
// TODO: import properly (I'm not really familiar with this js/node imports so let's jist use require for now)
const firestoreService = require('firestore-export-import'); //import {firestoreService} from 'firestore-export-import';
// Init firestore-export-import

/** Exports all firestore collections into a json file. */
const exportDb = async options => {
  console.log('Exporting firestore db..');
  try {
    if (!options.filePath) {
      console.error(`${chalk.red.bold('ERROR')} You need to specify the file path`);
    }
    let data = await firestoreService.backups(options.collections || []);

    let targetDirectory = path.dirname(options.filePath);
    !fs.existsSync(targetDirectory) && fs.mkdirSync(targetDirectory);

    fs.writeFile(options.filePath, JSON.stringify(data), err => {
      if (err) throw err;
      console.log(`${options.filePath} saved.`);
    });
  } catch (error) {
    console.error(`${chalk.red.bold('ERROR')} ${error}`);
    return false;
  }
  return true;
};

/** Imports data from json file into firestore. */
const importDb = async options => {
  console.log('Importing data into firestore..');
  await firestoreService.restore(options.filePath, options.dates, options.locations);

  console.log(`${options.filePath} imported.`);
  return true;
};

/** Migrates data
 * Connects to firestore db and runs the export/import
 */
module.exports = async function migrate(options) {
  // Init firestore-export-import
  firestoreService.initializeApp(
    options.config.environments[options.env].key,
    options.config.environments[options.env].databaseUrl,
  );

  try {
    if (options.action === 'export') await exportDb(options);
    else if (options.action === 'import') await importDb(options);
  } catch (error) {
    console.error(`${chalk.red.bold('ERROR')} ${error}`);
    return false;
  }

  console.log(`${chalk.green.bold('DONE')} ${options.action} finished.`);
  return true;
};

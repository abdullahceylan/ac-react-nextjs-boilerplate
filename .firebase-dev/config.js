const dbConfig = {
  databaseURL: '',
};

// Migration config
const firestoreMigratorConfig = {
  // Dates param to pass to firestore-export-import
  dates: [],

  // Locations param to pass to firestore-export-import
  locations: [],

  // Sample config, you can define your custom environments
  // the CLI will prompt to choose based on the key
  environments: {
    // dev environment
    dev: {
      databaseUrl: '',
      key: require('./firebase-service-key.json'),
    },

    // tst environment
    test: {
      databaseUrl: '',
      key: require('./firebase-service-key-test.json'),
    },
  },
};

module.exports = {
  migrationConfig: firestoreMigratorConfig,
  dbConfig,
};

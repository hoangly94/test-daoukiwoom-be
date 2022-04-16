
module.exports = {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME,
    // charset:"utf8_unicode_ci",
    synchronize: false,
    dropSchema: false,
    entities: ["dist/**/entities/*.entity.js"],
    migrations: ['dist/migrations/*.js'],
    cli: {
      entitiesDir: "src/modules",
      migrationsDir: 'src/migrations'
    },
    logging: false,
    // logger: "file"
  }
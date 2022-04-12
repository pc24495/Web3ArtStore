// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env.local" });
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "web_3_art_store",
      user: "prajwal",
      password: process.env.PG_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: {},
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  ...knexSnakeCaseMappers,
};

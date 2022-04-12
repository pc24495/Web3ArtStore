// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");
const dotenv = require("dotenv");
dotenv.config();
// dotenv.config({ path: "./.env.local" });
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

console.log(process.env);
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
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  ...knexSnakeCaseMappers,
};

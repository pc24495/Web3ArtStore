/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments().primary();
      table.string("username").notNullable().unique();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.timestamps(true, true);
    })
    .createTable("products", (table) => {
      table.increments().primary();
      table.string("name").notNullable();
      table
        .integer("creator_id")
        .references("id")
        .inTable("users")
        .onDelete("cascade");
      table.timestamps(true, true);
    })
    .createTable("password_recovery_trackers", (table) => {
      table
        .integer("user_id")
        .primary()
        .references("id")
        .inTable("users")
        .onDelete("cascade");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.raw(`DROP TABLE IF EXISTS users CASCADE`);
  await knex.raw(`DROP TABLE IF EXISTS products CASCADE`);
  return await knex.raw(
    `DROP TABLE IF EXISTS password_recovery_trackers CASCADE`
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.timestamps(true, true);
    })
    .createTable("products", (table) => {
      table.increments();
      table.string("name").notNullable();
      table
        .integer("creator_id")
        .references("id")
        .inTable("users")
        .onDelete("cascade");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.raw(`DROP TABLE IF EXISTS users CASCADE`);
  await knex.raw(`DROP TABLE IF EXISTS products CASCADE`);
};

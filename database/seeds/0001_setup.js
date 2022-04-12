/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE users CASCADE");
  await knex.raw("TRUNCATE TABLE products CASCADE");

  await knex("users").insert([
    { username: "Prajwal1", password: "SecretPassword" },
    { username: "Prajwal2", password: "SecretPassword" },
    { username: "Prajwal3", password: "SecretPassword" },
  ]);

  const users = await knex
    .raw("SELECT * FROM users")
    .then((result) => result.rows);

  await Promise.all(
    users.map(async (user) => {
      await knex("products").insert([
        { name: user.username + "product1", creator_id: user.id },
        { name: user.username + "product2", creator_id: user.id },
        { name: user.username + "product3", creator_id: user.id },
      ]);
    })
  );

  const products = await knex
    .raw("SELECT * FROM products")
    .then((result) => result.rows);

  console.log(products);
};

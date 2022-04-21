const { Model } = require("objection");
const knex = require("knex");
const knexfile = require("../../knexfile.js");
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env.local" });

Model.knex(knex(knexfile[process.env.NODE_ENV]));

class Users extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const Persons = require("./Products.js");

    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Persons,
        join: {
          from: "users.id",
          to: "products.creator_id",
        },
      },
    };
  }
}

module.exports = Users;

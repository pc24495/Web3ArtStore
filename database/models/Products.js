const { Model } = require("objection");
const knex = require("knex");
const knexfile = require("../../knexfile.js/index.js");
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env.local" });

Model.knex(knex(knexfile[process.env.NODE_ENV]));

class Products extends Model {
  static get tableName() {
    return "products";
  }

  static get relationMappings() {
    const Users = require("./Users.js");

    return {
      products: {
        relation: Model.BelongsToOneRelation,
        modelClass: Users,
        join: {
          from: "products.creator_id",
          to: "user.id",
        },
      },
    };
  }
}

module.exports = Products;

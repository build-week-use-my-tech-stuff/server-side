const knex = require("knex");
const knexConfig = require("../knexfile");

const dbEnv = process.env.DB_ENV || "production";

module.exports = knex(knexConfig[dbEnv]);

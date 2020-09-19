const knex = require("knex");
const config = require("./knexfile");
console.log(config);

// connect to database to server
const db = knex(process.env.NODE_ENV ? config.production : config.development);

module.exports = db;

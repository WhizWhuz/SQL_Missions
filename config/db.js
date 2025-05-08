const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dojo_of_jesper",
  password: "Gooddamn.4991",
  port: 5432,
});

module.exports = pool;

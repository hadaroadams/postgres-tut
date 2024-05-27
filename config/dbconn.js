const { Pool } = require("pg");

// const Pool = require("pg").Client;

const pool= new Pool({
  user: "postgres",
  host: "localhost",
  port: 55682,
  password: "Fgun1234.",
  database: "test",
});

module.exports = { pool };

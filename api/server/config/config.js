const env = require("dotenv")
env.config()

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "chprogdb",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: "root",
    database: "chprogdb_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};

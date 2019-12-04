const env = require("dotenv")
env.config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    "use_env_variable": "DATABASE_URL",
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};

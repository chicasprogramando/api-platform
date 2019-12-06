const env = require("dotenv");
env.config();

const common = {
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: "postgres"
};

module.exports = {
  development: {
    ...common
  },
  testing: {
    ...common
  },
  production: {
    use_env_variable: "DATABASE_URL",
    ...common
  }
};

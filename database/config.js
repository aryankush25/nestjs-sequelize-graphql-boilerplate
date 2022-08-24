// For more sequelize commands see https://github.com/sequelize/cli#usage
// & https://sequelize.org/v5/manual/migrations.html

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

module.exports = {
  development: dbConfig,
  test: dbConfig,
  production: dbConfig,
};

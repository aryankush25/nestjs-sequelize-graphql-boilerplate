// For more sequelize commands see https://github.com/sequelize/cli#usage
// & https://sequelize.org/v5/manual/migrations.html

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'notifications_service_server',
};

module.exports = {
  development: dbConfig,
  test: dbConfig,
  production: dbConfig,
};

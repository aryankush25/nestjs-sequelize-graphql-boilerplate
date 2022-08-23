// For more sequelize commands see https://github.com/sequelize/cli#usage & https://sequelize.org/v5/manual/migrations.html

const dbConfig = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'notifications_service_server',
};

module.exports = {
  development: {
    ...dbConfig,
  },
  test: {
    ...dbConfig,
  },
  production: {
    ...dbConfig,
  },
};

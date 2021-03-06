require('dotenv').config();

module.exports = {
    HOST: "localhost",
    USER: process.env.DBUSER,
    PASSWORD: process.env.PASSWORD,
    DB: "qui_post_service",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  
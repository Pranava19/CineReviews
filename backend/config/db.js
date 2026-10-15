const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sslOption = process.env.DB_SSL === 'true' ? { minVersion: 'TLSv1.2', rejectUnauthorized: true } : undefined;

const sequelizeConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false,
  pool: { max: 5, idle: 10000, acquire: 30000 },
};

if (sslOption) {
  sequelizeConfig.dialectOptions = { ssl: sslOption };
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  sequelizeConfig
);

const initDB = async () => {
  const mysql = require('mysql2/promise');
  try {
    const connOptions = {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    };
    if (sslOption) {
      connOptions.ssl = sslOption;
    }
    const conn = await mysql.createConnection(connOptions);
    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
    await conn.end();
  } catch (err) {
    console.warn('Failed to create database:', err);
  }
  await sequelize.sync();
};

module.exports = { sequelize, DataTypes, initDB };

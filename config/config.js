// TODO: Konfigurasikan koneksi database di file .env

/**
  * atur key DB_USER
  * atur key DB_PASS
  * atur key DB_NAME
  * atur key DB_HOST
  * atur key DB_DIALECT
  * contoh isi DB_DIALECT: 'mysql' | 'postgres' | 'sqlite' | 'mariadb'
  */

import dotenv from "dotenv";
dotenv.config();

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};

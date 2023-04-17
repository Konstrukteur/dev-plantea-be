// # importing libraries
import mysql from "mysql2";

// # load environment variables
import dotenv from "dotenv";
// dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// create the pool
export const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.EXPRESSJS_DB_HOST,
  database: process.env.EXPRESSJS_DB_DATABASENAME,
  user: process.env.EXPRESSJS_DB_USERNAME,
  password: process.env.EXPRESSJS_DB_PASSWORD,
  debug: false,
});

// create a promise wrapped instance of pool
export const promisePool = pool.promise();

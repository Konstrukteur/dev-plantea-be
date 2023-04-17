// # importing libraries
import Sequelize from "sequelize";

// # load environment variables
import dotenv from "dotenv";
// dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const database = `${process.env.EXPRESSJS_DB_DATABASENAME}`;
const user = `${process.env.EXPRESSJS_DB_USERNAME}`;
const password = `${process.env.EXPRESSJS_DB_PASSWORD}`;

export const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  host: process.env.EXPRESSJS_DB_HOST,
});

// # importing libraries
import Sequelize, { Op } from "sequelize";
import { sequelize } from "../config/database_sequelize.js";

// # define the entity
const SpecieEffect = sequelize.define("SpecieEffect", {
  // additional columns for the join table
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latin_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

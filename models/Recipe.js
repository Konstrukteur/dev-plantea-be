// # importing libraries
import Sequelize, { Op } from "sequelize";
import { sequelize } from "../config/database_sequelize.js";

// # define the entity
const Recipe = sequelize.define(
  "Recipe",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    portions: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    prep_time: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cook_time: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    abstract: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    instructions: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    country_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    // options
    timestamps: true, // enable timestamps
    createdAt: "created_at", // customize name of createdAt field
    updatedAt: "updated_at", // customize name of updatedAt field
    // tableName: "effects",
  }
);

// # associations

// # validations

// # methods
export const index = async (page, pageSize) => {
  const result = await Recipe.findAndCountAll({
    offset: (page - 1) * pageSize,
    limit: pageSize,
  });
  const { count, rows } = result;
  const totalPages = Math.ceil(count / pageSize);

  return { rows: rows, count: count, totalPages: totalPages };
};

export const show = async (id) => {
  const response = await Recipe.findOne({ where: { id: id } });

  return response.dataValues;
};

export const getByName = async (name) => {
  const response = await Recipe.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
  });

  return response.dataValues;
};

export const create = async (name, link) => {
  const sql = `INSERT INTO plantea_pfaf (name, link) VALUES ($1, $2) RETURNING *`;
  const response = await promisePool.query(sql, [name, link]);

  return response[0];
};

export const edit = async (id, name, link) => {
  const sql = `UPDATE plantea_pfaf SET name = $2, link = $3 WHERE id = $1 RETURNING *`;
  const response = await promisePool.query(sql, [id, name, link]);

  return response[0];
};

export const update = async (id, name, link) => {
  const sql = `UPDATE plantea_pfaf SET name = $2, link = $3 WHERE id = $1 RETURNING *`;
  const response = await promisePool.query(sql, [id, name, link]);

  return response[0];
};

export const destroy = async (id) => {
  const sql = `DELETE FROM plantea_pfaf WHERE id = $1`;
  const response = await promisePool.query(sql, [id]);

  return response[0];
};

export const countAll = async () => {
  const response = await Recipe.count();

  return response;
};

export const getByIngredient = async (ingredient) => {
  const response = await Recipe.findAll({
    where: { ingredient: { [Op.like]: `%${ingredient}%` } },
  });

  return response;
};

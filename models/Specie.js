// # importing libraries
import Sequelize, { Op } from "sequelize";
import { sequelize } from "../config/database_sequelize.js";

const Specie = sequelize.define(
  "Specie",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    latin_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    common_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    family: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    usda_hardiness: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    known_hazards: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    habitats: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    range: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    edibility_rating: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    other_uses_rating: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    weed_potential: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    medicinal_rating: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    physical_characteristics: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    synonyms: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    habitats_2: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    edible_uses: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    medicinal_uses: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    other_uses: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    special_uses: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cultivation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    carbon_farming: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    propagation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    found_in: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    conservation_status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    botanical_reference: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image_1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title_image_1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    source_image_1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image_2: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title_image_2: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    source_image_2: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    // options
    timestamps: true, // enable timestamps
    createdAt: "created_at", // customize name of createdAt field
    updatedAt: "updated_at", // customize name of updatedAt field
    tableName: "plantea_pfaf",
  }
);

export const index = async (page, pageSize) => {
  const result = await Specie.findAndCountAll({
    offset: (page - 1) * pageSize,
    limit: pageSize,
  });
  const { count, rows } = result;
  const totalPages = Math.ceil(count / pageSize);

  return { rows: rows, count: count, totalPages: totalPages };
};

export const show = async (id) => {
  const response = await Specie.findOne({ where: { id: id } });

  return response.dataValues;
};

export const getByName = async (name) => {
  const response = await Specie.findOne({
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

export const countSpecies = async (id) => {
  const sql = `SELECT COUNT(*) FROM your_table`;
  const response = await promisePool.query(sql);

  return response[0];
};

// # importing libraries
import Sequelize, { Op } from "sequelize";
import { sequelize } from "../config/database_sequelize.js";
import * as Specie from "./Specie.js";
import * as SpecieEffect from "./SpecieEffect.js";
import * as Condition from "./Condition.js";

// # define the entity
const Effect = sequelize.define(
  "Effect",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    condition_id: {
      type: Sequelize.INTEGER, // use the same data type as the id column in the BodyCondition model
      allowNull: false,
      references: {
        model: "Condition", // name of the referenced model
        key: "id", // name of the referenced column
      },
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
// Effect.belongsTo(BodyCondition, { foreignKey: "body_condition_id" });
// Effect.belongsToMany(Specie, { through: SpecieEffect });

// # validations

// # methods
export const index = async (page, pageSize) => {
  const result = await Effect.findAndCountAll({
    offset: (page - 1) * pageSize,
    limit: pageSize,
  });
  const { count, rows } = result;
  const totalPages = Math.ceil(count / pageSize);

  return { rows: rows, count: count, totalPages: totalPages };
};

export const show = async (id) => {
  const response = await Effect.findOne({ where: { id: id } });

  return response.dataValues;
};

export const getByName = async (name) => {
  const response = await Effect.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
  });

  return response.dataValues;
};

export const create = async (name, description, condition_id) => {
  const response = await Effect.create({
    name: name,
    description: description,
    condition_id: condition_id,
  });

  return response;
};

export const edit = async (id, name, description, condition_id) => {
  const response = await Effect.update({
    id: id,
    name: name,
    description: description,
    condition_id: condition_id,
  });

  return response;
};

export const update = async (id, name, description, condition_id) => {
  const response = await Effect.update({
    id: id,
    name: name,
    description: description,
    condition_id: condition_id,
  });

  return response;
};

export const destroy = async (id) => {
  const response = await Effect.destroy({ where: { id: id } });

  return response;
};

export const countAll = async () => {
  const response = await Effect.count();

  return response;
};

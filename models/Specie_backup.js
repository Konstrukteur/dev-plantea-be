import { promisePool } from "../config/database_sequelize.js";

export const index = async () => {
  const sql = `SELECT * FROM plantea_pfaf ORDER BY id ASC`;
  const response = await promisePool.query(sql);

  return response[0];
};

export const show = async (id) => {
  const sql = `SELECT * FROM plantea_pfaf WHERE id = ${id}`;
  const response = await promisePool.query(sql, [id]);
  console.log(response);

  return response[0];
};

export const getByName = async (name) => {
  const sql = `SELECT * FROM plantea_pfaf WHERE name LIKE '%${name}%'`;
  const response = await promisePool.query(sql, [name]);

  return response[0];
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

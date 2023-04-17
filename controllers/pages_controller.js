// import { pool } from "../config/database.js";

export const index = async (req, res, next) => {
  try {
    res.render("layouts/index");
  } catch (err) {
    console.error(err);
  }
};

export const show = async (req, res, next) => {
  const sql = `SELECT * FROM pages WHERE id = $1`;
  const { id } = req.params;
  const {
    rows: [page],
  } = await pool.query(sql, [id]);

  res.json(page);
};

export const create = async (req, res, next) => {
  const page = req.body;

  if (!page) {
    return res.status(400).json({ error: "Missing data" });
  }

  const sql = `INSERT INTO pages (${Object.keys(page).join(
    ", "
  )}) VALUES (${Object.values(page)
    .map((value) => `'${value}'`)
    .join(", ")}) RETURNING *`;

  try {
    const { rows: page } = await pool.query(sql);
    res.status(201).json(page[0]);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create page" });
  }
};

export const update = async (req, res, next) => {
  const sql = `UPDATE pages SET price = $1, date = $2, user_id = $3 WHERE id = $4 RETURNING *`;
  const { id } = req.params;
  const { price, date, user_id } = req.body;

  if (!price || !date || !user_id || !id)
    return res.json({ error: "Missing data" });

  const { rows: page } = await pool.query(sql, [price, date, user_id, id]);

  res.json(page);
};

export const destroy = async (req, res, next) => {
  const sql = `DELETE FROM pages WHERE id = $1`;
  const { id } = req.params;
  const { rows: page } = await pool.query(sql, [id]);

  res.json(page);
};

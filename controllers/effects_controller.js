import * as Effect from "../models/Effect.js";

export const index = async (req, res) => {
  const { page = 1, pageSize = 20 } = req.query;

  try {
    const { rows, count, totalPages } = await Effect.index(
      page,
      Number(pageSize)
    );

    res.json({
      data: rows,
      metadata: {
        page,
        pageSize,
        totalPages,
        totalRecords: count,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const show = async (req, res) => {
  const { id } = req.params;

  const effect = await Effect.show(id);

  res.json(effect);
};

export const getByName = async (req, res, next) => {
  const { name } = req.params;
  const effect = await Effect.getByName(name);

  res.json(effect);
};

export const create = async (req, res, next) => {
  const { name, description, condition_id } = req.body;

  if (!name || !description || !condition_id) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    const effect = await Effect.create(name, description, condition_id);
    res.status(201).json(effect[0]);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create resource" });
  }
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, condition_id } = req.body;

  if (!id || !name || !description || !condition_id)
    return res.json({ error: "Missing data" });

  const effect = await Effect.update(id, name, description, condition_id);

  res.json(effect);
};

export const destroy = async (req, res, next) => {
  const { id } = req.params;
  const effect = await Effect.destroy(id);

  res.json(effect);
};

import * as Specie from "../../models/Specie.js";

export const index = async (req, res) => {
  const { page = 1, pageSize = 20 } = req.query;

  try {
    const { rows, count, totalPages } = await Specie.index(
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

  const specie = await Specie.show(id);

  res.json(specie);
};

export const getByName = async (req, res, next) => {
  const { name } = req.params;
  const specie = await Specie.getByName(name);

  res.json(specie);
};

export const create = async (req, res, next) => {
  const { name, link } = req.body;

  if (!name || !link) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    const specie = await Specie.create(name, link);
    res.status(201).json(specie[0]);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create resource" });
  }
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, link } = req.body;

  if (!id || !name || !link) return res.json({ error: "Missing data" });

  const specie = await Specie.update(id, name, link);

  res.json(specie);
};

export const destroy = async (req, res, next) => {
  const { id } = req.params;
  const specie = await Specie.destroy(id);

  res.json(specie);
};

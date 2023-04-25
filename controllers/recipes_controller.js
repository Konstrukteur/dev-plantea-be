import * as Recipe from "../models/Recipe.js";

export const index = async (req, res) => {
  const { page = 1, pageSize = 20 } = req.query;

  try {
    const { rows, count, totalPages } = await Recipe.index(
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

  const recipe = await Recipe.show(id);

  res.json(recipe);
};

export const getByName = async (req, res, next) => {
  const { name } = req.params;
  const recipe = await Recipe.getByName(name);

  res.json(recipe);
};

export const getByIngredient = async (req, res, next) => {
  const { ingredient } = req.params;
  const recipes = await Recipe.getByIngredient(ingredient);

  res.json(recipes);
};

export const create = async (req, res, next) => {
  const {
    name,
    portions,
    prep_time,
    cook_time,
    abstract,
    instructions,
    country_id,
    author_id,
  } = req.body;

  if (!name || !instructions) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    const recipe = await Recipe.create(
      name,
      portions,
      prep_time,
      cook_time,
      abstract,
      instructions,
      country_id,
      author_id
    );
    res.status(201).json(recipe[0]);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create resource" });
  }
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    portions,
    prep_time,
    cook_time,
    abstract,
    instructions,
    country_id,
    author_id,
  } = req.body;

  if (!id || !name || !instructions) return res.json({ error: "Missing data" });

  const recipe = await Recipe.update(
    id,
    name,
    portions,
    prep_time,
    cook_time,
    abstract,
    instructions,
    country_id,
    author_id
  );

  res.json(recipe);
};

export const destroy = async (req, res, next) => {
  const { id } = req.params;
  const recipe = await Recipe.destroy(id);

  res.json(recipe);
};

export const countRecipes = async (req, res, next) => {
  const quantity = await Recipe.countAll();

  res.json(quantity);
};

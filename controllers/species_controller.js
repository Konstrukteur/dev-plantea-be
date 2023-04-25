import * as Specie from "../models/Specie.js";

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
  const {
    genus_id,
    name,
    binominal_name,
    common_name,
    synonyms,
    usda_hardiness,
    uk_hardiness,
    habitat,
    range,
    edible_uses,
    medicinal_uses,
    other_uses,
    cultivation,
    carbon_farming,
    propagation,
    lifespan,
    deciduous_evergreen,
    height,
    width,
    soil,
    shade,
    moisture,
    well_drained,
    nitrogen_fixer,
    ph,
    acid,
    alkaline,
    saline,
    wind,
    growth_rate,
    pollution,
    poor_soil,
    drought,
    wildlife,
    pollinators,
    self_fertile,
    known_hazards,
    heavy_clay,
    edibility_rating,
    medicinal_rating,
    frost_tender,
    scented,
    pfaf_id,
    usda_id,
    author_name,
    drawing_id,
    subcategory_id,
  } = req.body;

  if (
    !genus_id ||
    !name ||
    !binominal_name ||
    !common_name ||
    !drawing_id ||
    !subcategory_id
  ) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    const specie = await Specie.create(
      genus_id,
      name,
      binominal_name,
      common_name,
      synonyms,
      usda_hardiness,
      uk_hardiness,
      habitat,
      range,
      edible_uses,
      medicinal_uses,
      other_uses,
      cultivation,
      carbon_farming,
      propagation,
      lifespan,
      deciduous_evergreen,
      height,
      width,
      soil,
      shade,
      moisture,
      well_drained,
      nitrogen_fixer,
      ph,
      acid,
      alkaline,
      saline,
      wind,
      growth_rate,
      pollution,
      poor_soil,
      drought,
      wildlife,
      pollinators,
      self_fertile,
      known_hazards,
      heavy_clay,
      edibility_rating,
      medicinal_rating,
      frost_tender,
      scented,
      pfaf_id,
      usda_id,
      author_name,
      drawing_id,
      subcategory_id
    );
    res.status(201).json(specie[0]);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create resource" });
  }
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const {
    genus_id,
    name,
    binominal_name,
    common_name,
    synonyms,
    usda_hardiness,
    uk_hardiness,
    habitat,
    range,
    edible_uses,
    medicinal_uses,
    other_uses,
    cultivation,
    carbon_farming,
    propagation,
    lifespan,
    deciduous_evergreen,
    height,
    width,
    soil,
    shade,
    moisture,
    well_drained,
    nitrogen_fixer,
    ph,
    acid,
    alkaline,
    saline,
    wind,
    growth_rate,
    pollution,
    poor_soil,
    drought,
    wildlife,
    pollinators,
    self_fertile,
    known_hazards,
    heavy_clay,
    edibility_rating,
    medicinal_rating,
    frost_tender,
    scented,
    pfaf_id,
    usda_id,
    author_name,
    drawing_id,
    subcategory_id,
  } = req.body;

  if (
    !id ||
    !genus_id ||
    !name ||
    !binominal_name ||
    !common_name ||
    !drawing_id ||
    !subcategory_id
  )
    return res.json({ error: "Missing data" });

  const specie = await Specie.update(
    id,
    genus_id,
    name,
    binominal_name,
    common_name,
    synonyms,
    usda_hardiness,
    uk_hardiness,
    habitat,
    range,
    edible_uses,
    medicinal_uses,
    other_uses,
    cultivation,
    carbon_farming,
    propagation,
    lifespan,
    deciduous_evergreen,
    height,
    width,
    soil,
    shade,
    moisture,
    well_drained,
    nitrogen_fixer,
    ph,
    acid,
    alkaline,
    saline,
    wind,
    growth_rate,
    pollution,
    poor_soil,
    drought,
    wildlife,
    pollinators,
    self_fertile,
    known_hazards,
    heavy_clay,
    edibility_rating,
    medicinal_rating,
    frost_tender,
    scented,
    pfaf_id,
    usda_id,
    author_name,
    drawing_id,
    subcategory_id
  );

  res.json(specie);
};

export const destroy = async (req, res, next) => {
  const { id } = req.params;
  const specie = await Specie.destroy(id);

  res.json(specie);
};

export const countSpecies = async (req, res, next) => {
  const quantity = await Specie.countAll();

  res.json(quantity);
};

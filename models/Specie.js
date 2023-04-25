// # importing libraries
import Sequelize, { Op } from "sequelize";
import { sequelize } from "../config/database_sequelize.js";
import * as Effect from "./Effect.js";
import * as SpecieEffect from "./SpecieEffect.js";

// # define the entity
const Specie = sequelize.define(
  "Specie",
  {
    genus_id: {
      type: Sequelize.INTEGER, // use the same data type as the id column in the BodyCondition model
      allowNull: false,
      references: {
        model: "Genera", // name of the referenced model
        key: "id", // name of the referenced column
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    binominal_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    common_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    synonyms: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    usda_hardiness: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    uk_hardiness: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    habitat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    range: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    physical_characteristics: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    edible_uses: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    medicinal_uses: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    other_uses: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    cultivation: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    carbon_farming: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    propagation: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    lifespan: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deciduous_evergreen: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    height: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    width: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    soil: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    moisture: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    well_drained: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nitrogen_fixer: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ph: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    acid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    alkaline: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    saline: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wind: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    growth_rate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pollution: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    poor_soil: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    drought: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wildlife: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pollinators: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    self_fertile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    known_hazards: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    heavy_clay: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    edibility_rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    medicinal_rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    frost_tender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    scented: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pfaf_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    usda_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    author_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    drawing_id: {
      type: Sequelize.INTEGER, // use the same data type as the id column in the BodyCondition model
      allowNull: false,
      references: {
        model: "Images", // name of the referenced model
        key: "id", // name of the referenced column
      },
    },
    subcategory_id: {
      type: Sequelize.INTEGER, // use the same data type as the id column in the BodyCondition model
      allowNull: false,
      references: {
        model: "Subcategory", // name of the referenced model
        key: "id", // name of the referenced column
      },
    },
  },
  {
    // options
    timestamps: true, // enable timestamps
    createdAt: "created_at", // customize name of createdAt field
    updatedAt: "updated_at", // customize name of updatedAt field
    tableName: "species",
  }
);

// # associations
// Specie.belongsToMany(Effect, { through: SpecieEffect });

// # validations

// # methods
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

  return response;
};

export const getByName = async (name) => {
  const response = await Specie.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
  });

  return response;
};

export const create = async (
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
) => {
  const response = await Specie.create({
    genus_id: genus_id,
    name: name,
    binominal_name: binominal_name,
    common_name: common_name,
    synonyms: synonyms,
    usda_hardiness: usda_hardiness,
    uk_hardiness: uk_hardiness,
    habitat: habitat,
    range: range,
    edible_uses: edible_uses,
    medicinal_uses: medicinal_uses,
    other_uses: other_uses,
    cultivation: cultivation,
    carbon_farming: carbon_farming,
    propagation: propagation,
    lifespan: lifespan,
    deciduous_evergreen: deciduous_evergreen,
    height: height,
    width: width,
    soil: soil,
    shade: shade,
    moisture: moisture,
    well_drained: well_drained,
    nitrogen_fixer: nitrogen_fixer,
    ph: ph,
    acid: acid,
    alkaline: alkaline,
    saline: saline,
    wind: wind,
    growth_rate: growth_rate,
    pollution: pollution,
    poor_soil: poor_soil,
    drought: drought,
    wildlife: wildlife,
    pollinators: pollinators,
    self_fertile: self_fertile,
    known_hazards: known_hazards,
    heavy_clay: heavy_clay,
    edibility_rating: edibility_rating,
    medicinal_rating: medicinal_rating,
    frost_tender: frost_tender,
    scented: scented,
    pfaf_id: pfaf_id,
    usda_id: usda_id,
    author_name: author_name,
    drawing_id: drawing_id,
    subcategory_id: subcategory_id,
  });

  return response;
};

export const edit = async (
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
) => {
  const response = await Specie.update(
    {
      id: id,
      genus_id: genus_id,
      name: name,
      binominal_name: binominal_name,
      common_name: common_name,
      synonyms: synonyms,
      usda_hardiness: usda_hardiness,
      uk_hardiness: uk_hardiness,
      habitat: habitat,
      range: range,
      edible_uses: edible_uses,
      medicinal_uses: medicinal_uses,
      other_uses: other_uses,
      cultivation: cultivation,
      carbon_farming: carbon_farming,
      propagation: propagation,
      lifespan: lifespan,
      deciduous_evergreen: deciduous_evergreen,
      height: height,
      width: width,
      soil: soil,
      shade: shade,
      moisture: moisture,
      well_drained: well_drained,
      nitrogen_fixer: nitrogen_fixer,
      ph: ph,
      acid: acid,
      alkaline: alkaline,
      saline: saline,
      wind: wind,
      growth_rate: growth_rate,
      pollution: pollution,
      poor_soil: poor_soil,
      drought: drought,
      wildlife: wildlife,
      pollinators: pollinators,
      self_fertile: self_fertile,
      known_hazards: known_hazards,
      heavy_clay: heavy_clay,
      edibility_rating: edibility_rating,
      medicinal_rating: medicinal_rating,
      frost_tender: frost_tender,
      scented: scented,
      pfaf_id: pfaf_id,
      usda_id: usda_id,
      author_name: author_name,
      drawing_id: drawing_id,
      subcategory_id: subcategory_id,
    },
    { where: { id: id } }
  );

  return response;
};

export const update = async (
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
) => {
  const response = await Specie.update(
    {
      id: id,
      genus_id: genus_id,
      name: name,
      binominal_name: binominal_name,
      common_name: common_name,
      synonyms: synonyms,
      usda_hardiness: usda_hardiness,
      uk_hardiness: uk_hardiness,
      habitat: habitat,
      range: range,
      edible_uses: edible_uses,
      medicinal_uses: medicinal_uses,
      other_uses: other_uses,
      cultivation: cultivation,
      carbon_farming: carbon_farming,
      propagation: propagation,
      lifespan: lifespan,
      deciduous_evergreen: deciduous_evergreen,
      height: height,
      width: width,
      soil: soil,
      shade: shade,
      moisture: moisture,
      well_drained: well_drained,
      nitrogen_fixer: nitrogen_fixer,
      ph: ph,
      acid: acid,
      alkaline: alkaline,
      saline: saline,
      wind: wind,
      growth_rate: growth_rate,
      pollution: pollution,
      poor_soil: poor_soil,
      drought: drought,
      wildlife: wildlife,
      pollinators: pollinators,
      self_fertile: self_fertile,
      known_hazards: known_hazards,
      heavy_clay: heavy_clay,
      edibility_rating: edibility_rating,
      medicinal_rating: medicinal_rating,
      frost_tender: frost_tender,
      scented: scented,
      pfaf_id: pfaf_id,
      usda_id: usda_id,
      author_name: author_name,
      drawing_id: drawing_id,
      subcategory_id: subcategory_id,
    },
    { where: { id: id } }
  );

  return response;
};

export const destroy = async (id) => {
  const response = await Specie.destroy({ where: { id: id } });

  return response;
};

export const countAll = async () => {
  const response = await Specie.count();

  return response;
};

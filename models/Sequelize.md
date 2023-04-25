# Sequelize many-to-many

After defining the many-to-many relationship, you can use the generated add<Association>()
and get<Association>() methods to associate and retrieve related data. For example,
to associate a Specie with an Effect, you can use the addEffect() method:

const specie = await Specie.findByPk(specieId);
const effect = await Effect.findByPk(effectId);
await specie.addEffect(effect);

And to retrieve all Effects associated with a Specie, you can use the getEffects() method:
const specie = await Specie.findByPk(specieId);
const effects = await specie.getEffects();

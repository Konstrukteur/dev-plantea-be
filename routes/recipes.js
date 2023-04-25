import { Router } from "express";
import * as recipesController from "../controllers/recipes_controller.js";

const recipesRouter = Router();

recipesRouter.route("/").get(recipesController.index);
recipesRouter.route("/").post(recipesController.create);
recipesRouter.route("/:id").get(recipesController.show);
recipesRouter.route("/:id").put(recipesController.update);
recipesRouter.route("/:id").delete(recipesController.destroy);

recipesRouter.route("/count/countRecipes").get(recipesController.countRecipes);
recipesRouter.route("/get-by-name/:name").get(recipesController.getByName);
recipesRouter
  .route("/get-by-ingredient/:ingredient")
  .get(recipesController.getByIngredient);

export default recipesRouter;

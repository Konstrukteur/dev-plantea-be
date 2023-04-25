import { Router } from "express";
import * as apiRecipesController from "../controllers/api_recipes_controller.js";

const apiRecipesRouter = Router();

apiRecipesRouter
  .route("/get-by-ingredient/:ingredient")
  .get(apiRecipesController.getByIngredient);

export default apiRecipesRouter;

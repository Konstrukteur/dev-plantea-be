import { Router } from "express";
import * as adminRecipesController from "../../controllers/admin/recipes_controller.js";

const adminRecipesRouter = Router();

adminRecipesRouter.route("/").get(adminRecipesController.index);
adminRecipesRouter.route("/").post(adminRecipesController.create);
adminRecipesRouter.route("/:id").get(adminRecipesController.show);
adminRecipesRouter.route("/:id").put(adminRecipesController.update);
adminRecipesRouter.route("/:id").delete(adminRecipesController.destroy);

export default adminRecipesRouter;

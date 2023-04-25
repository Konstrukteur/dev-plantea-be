import { Router } from "express";
import * as adminEffectsController from "../../controllers/admin/effects_controller.js";

const adminEffectsRouter = Router();

adminEffectsRouter.route("/").get(adminEffectsController.index);
adminEffectsRouter.route("/").post(adminEffectsController.create);
adminEffectsRouter.route("/:id").get(adminEffectsController.show);
adminEffectsRouter.route("/:id").put(adminEffectsController.update);
adminEffectsRouter.route("/:id").delete(adminEffectsController.destroy);

export default adminEffectsRouter;

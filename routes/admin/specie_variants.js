import { Router } from "express";
import * as adminSpecieVariantsController from "../../controllers/admin/specie_variants_controller.js";

const adminSpecieVariantsRouter = Router();

adminSpecieVariantsRouter.route("/").get(adminSpecieVariantsController.index);
adminSpecieVariantsRouter.route("/").post(adminSpecieVariantsController.create);
adminSpecieVariantsRouter.route("/:id").get(adminSpecieVariantsController.show);
adminSpecieVariantsRouter
  .route("/:id")
  .put(adminSpecieVariantsController.update);
adminSpecieVariantsRouter
  .route("/:id")
  .delete(adminSpecieVariantsController.destroy);

export default adminSpecieVariantsRouter;

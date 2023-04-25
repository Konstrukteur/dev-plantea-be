import { Router } from "express";
import * as adminSpeciesController from "../../controllers/admin/species_controller.js";

const adminSpeciesRouter = Router();

adminSpeciesRouter.route("/").get(adminSpeciesController.index);
adminSpeciesRouter.route("/").post(adminSpeciesController.create);
adminSpeciesRouter.route("/:id").get(adminSpeciesController.show);
adminSpeciesRouter.route("/:id").put(adminSpeciesController.update);
adminSpeciesRouter.route("/:id").delete(adminSpeciesController.destroy);

export default adminSpeciesRouter;

import { Router } from "express";
import * as speciesController from "../controllers/species_controller.js";

const speciesRouter = Router();

speciesRouter.route("/").get(speciesController.index);
// speciesRouter.route("/").post(speciesController.create);
speciesRouter.route("/:id").get(speciesController.show);
// speciesRouter.route("/:id").put(speciesController.update);
// speciesRouter.route("/:id").delete(speciesController.destroy);

speciesRouter.route("/count/countSpecies").get(speciesController.countSpecies);
speciesRouter.route("/get-by-name/:name").get(speciesController.getByName);

export default speciesRouter;

import { Router } from "express";
import * as adminFamiliesController from "../../controllers/admin/families_controller.js";

const adminFamiliesRouter = Router();

adminFamiliesRouter.route("/").get(adminFamiliesController.index);
adminFamiliesRouter.route("/").post(adminFamiliesController.create);
adminFamiliesRouter.route("/:id").get(adminFamiliesController.show);
adminFamiliesRouter.route("/:id").put(adminFamiliesController.update);
adminFamiliesRouter.route("/:id").delete(adminFamiliesController.destroy);

export default adminFamiliesRouter;

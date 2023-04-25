import { Router } from "express";
import * as adminOriginsController from "../../controllers/admin/origins_controller.js";

const adminOriginsRouter = Router();

adminOriginsRouter.route("/").get(adminOriginsController.index);
adminOriginsRouter.route("/").post(adminOriginsController.create);
adminOriginsRouter.route("/:id").get(adminOriginsController.show);
adminOriginsRouter.route("/:id").put(adminOriginsController.update);
adminOriginsRouter.route("/:id").delete(adminOriginsController.destroy);

export default adminOriginsRouter;

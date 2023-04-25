import { Router } from "express";
import * as adminGeneraController from "../../controllers/admin/genera_controller.js";

const adminGeneraRouter = Router();

adminGeneraRouter.route("/").get(adminGeneraController.index);
adminGeneraRouter.route("/").post(adminGeneraController.create);
adminGeneraRouter.route("/:id").get(adminGeneraController.show);
adminGeneraRouter.route("/:id").put(adminGeneraController.update);
adminGeneraRouter.route("/:id").delete(adminGeneraController.destroy);

export default adminGeneraRouter;

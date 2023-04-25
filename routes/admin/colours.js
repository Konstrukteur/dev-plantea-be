import { Router } from "express";
import * as adminColoursController from "../../controllers/admin/colours_controller.js";

const adminColoursRouter = Router();

adminColoursRouter.route("/").get(adminColoursController.index);
adminColoursRouter.route("/").post(adminColoursController.create);
adminColoursRouter.route("/:id").get(adminColoursController.show);
adminColoursRouter.route("/:id").put(adminColoursController.update);
adminColoursRouter.route("/:id").delete(adminColoursController.destroy);

export default adminColoursRouter;

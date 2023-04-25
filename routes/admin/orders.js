import { Router } from "express";
import * as adminOrdersController from "../../controllers/admin/orders_controller.js";

const adminOrdersRouter = Router();

adminOrdersRouter.route("/").get(adminOrdersController.index);
adminOrdersRouter.route("/").post(adminOrdersController.create);
adminOrdersRouter.route("/:id").get(adminOrdersController.show);
adminOrdersRouter.route("/:id").put(adminOrdersController.update);
adminOrdersRouter.route("/:id").delete(adminOrdersController.destroy);

export default adminOrdersRouter;

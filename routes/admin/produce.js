import { Router } from "express";
import * as adminProduceController from "../../controllers/admin/produce_controller.js";

const adminProduceRouter = Router();

adminProduceRouter.route("/").get(adminProduceController.index);
adminProduceRouter.route("/").post(adminProduceController.create);
adminProduceRouter.route("/:id").get(adminProduceController.show);
adminProduceRouter.route("/:id").put(adminProduceController.update);
adminProduceRouter.route("/:id").delete(adminProduceController.destroy);

export default adminProduceRouter;

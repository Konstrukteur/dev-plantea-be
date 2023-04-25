import { Router } from "express";
import * as adminImagesController from "../../controllers/admin/images_controller.js";

const adminImagesRouter = Router();

adminImagesRouter.route("/").get(adminImagesController.index);
adminImagesRouter.route("/").post(adminImagesController.create);
adminImagesRouter.route("/:id").get(adminImagesController.show);
adminImagesRouter.route("/:id").put(adminImagesController.update);
adminImagesRouter.route("/:id").delete(adminImagesController.destroy);

export default adminImagesRouter;

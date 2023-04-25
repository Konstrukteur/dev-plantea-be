import { Router } from "express";
import * as adminUsersController from "../../controllers/admin/users_controller.js";

const adminUsersRouter = Router();

adminUsersRouter.route("/").get(adminUsersController.index);
adminUsersRouter.route("/").post(adminUsersController.create);
adminUsersRouter.route("/:id").get(adminUsersController.show);
adminUsersRouter.route("/:id").put(adminUsersController.update);
adminUsersRouter.route("/:id").delete(adminUsersController.destroy);

export default adminUsersRouter;

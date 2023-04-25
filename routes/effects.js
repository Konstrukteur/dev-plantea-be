import { Router } from "express";
import * as effectsController from "../controllers/effects_controller.js";

const effectsRouter = Router();

effectsRouter.route("/").get(effectsController.index);
// effectsRouter.route("/").post(effectsController.create);
effectsRouter.route("/:id").get(effectsController.show);
// effectsRouter.route("/:id").put(effectsController.update);
// effectsRouter.route("/:id").delete(effectsController.destroy);

effectsRouter.route("/get-by-name/:name").get(effectsController.getByName);

export default effectsRouter;

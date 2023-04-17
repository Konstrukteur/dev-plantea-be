import { Router } from "express";
import * as pagesController from "../controllers/pages_controller.js";

const pagesRouter = Router();

pagesRouter.route("/").get(pagesController.index);

export default pagesRouter;

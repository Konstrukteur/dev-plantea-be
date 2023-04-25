// # importing libraries
import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

// # importing dependencies
import APIErrorHandler from "./middlewares/errorHandler.js";
import "./config/database_sequelize.js";
import verifyJWTToken from "./middlewares/verifyJWTToken.js";

// # importing routers
import pagesRouter from "./routes/pages.js";
import effectsRouter from "./routes/effects.js";
import apiRecipesRouter from "./routes/apiRecipes.js";
import recipesRouter from "./routes/recipes.js";
import speciesRouter from "./routes/species.js";

// # initialising ExpressJS server
const app = express();
const PORT = process.env.PORT || 8000;

// # Set up Morgan logging
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// # activate cors
app.use(cors());

// # set path
app.use("/", express.static(path.join(path.resolve(), "public")));

// # configure json response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// # set the view engine to ejs
app.set("view engine", "ejs");

// # connect admin section routes
app.use("/admin", pagesRouter);

// # connect API routes
app.use("/api/v1/effects", effectsRouter);
app.use("/api/v1/recipes", recipesRouter);
app.use("/api/v1/apirecipes", apiRecipesRouter);
app.use("/api/v1/species", speciesRouter);

// # activate error handler
app.use(APIErrorHandler);

// # activate listener
app.listen(PORT, () => {
  console.log(
    `\nServer listening on port ${PORT}\nPress CTRL+C to stop the server`
  );
});

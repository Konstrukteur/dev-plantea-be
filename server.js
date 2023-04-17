// # importing libraries
import express from "express";
import cors from "cors";
import path from "path";

// # importing dependencies
import APIErrorHandler from "./middlewares/errorHandler.js";

// # importing routers
import pagesRouter from "./routes/pages.js";
import speciesRouter from "./routes/species.js";
// import recipes from "./routes/recipes.js";

// # initialising ExpressJS server
const app = express();
const PORT = process.env.PORT || 8000;

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
app.use("/api/v1/species", speciesRouter);

// # activate error handler
app.use(APIErrorHandler);

// # activate listener
app.listen(PORT, () => {
  console.log(
    `\nServer listening on port ${PORT}\nPress CTRL+C to stop the server`
  );
});

const express = require("express");
const movieRoutes = express.Router();

const movieController = require("../controllers/movies");

movieRoutes.get("/", movieController.getMovies);
movieRoutes.get("/:id", movieController.getMoviesId);

module.exports = movieRoutes;

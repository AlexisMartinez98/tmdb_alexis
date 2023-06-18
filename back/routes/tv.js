const express = require("express");
const movieRoutes = express.Router();
const tvController = require("../controllers/tv");

movieRoutes.get("/", tvController.getTv);
movieRoutes.get("/:id", tvController.getTvId);

module.exports = movieRoutes;

const express = require("express");
const searchRoutes = express.Router();
const searchController = require("../controllers/search");

searchRoutes.get("/", searchController.getSearch);

module.exports = searchRoutes;

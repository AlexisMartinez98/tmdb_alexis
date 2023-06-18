const express = require("express");
const router = express.Router();
const movieRoutes = require("./movies");
const tvRoutes = require("./tv");

router.use("/movies", movieRoutes);
router.use("/tv", tvRoutes);

module.exports = router;

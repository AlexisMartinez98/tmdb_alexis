const express = require("express");
const router = express.Router();
const movieRoutes = require("./movies");
const tvRoutes = require("./tv");
const userRegisterRoutes = require("./userRegister");
const userLoginRoutes = require("./userLogin");

router.use("/movies", movieRoutes);
router.use("/tv", tvRoutes);
router.use("/user", userRegisterRoutes);
router.use("/user", userLoginRoutes);

module.exports = router;

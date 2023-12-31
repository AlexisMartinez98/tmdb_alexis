const express = require("express");
const router = express.Router();
const movieRoutes = require("./movies");
const tvRoutes = require("./tv");
const userRegisterRoutes = require("./userRegister");
const userLoginRoutes = require("./userLogin");
const searchRoutes = require("./search");
const userMethods = require("./userMethods");

router.use("/movies", movieRoutes);
router.use("/tv", tvRoutes);
router.use("/user", userRegisterRoutes);
router.use("/user", userLoginRoutes);
router.use("/user", userMethods);
router.use("/search", searchRoutes);

module.exports = router;

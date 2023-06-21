const express = require("express");
const userRegisterRoutes = express.Router();
const User = require("../models/user");

userRegisterRoutes.post("/register", async (req, res, next) => {
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRegisterRoutes;

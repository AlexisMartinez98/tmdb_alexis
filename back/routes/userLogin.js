const express = require("express");
const userLoginRoutes = express.Router();
const User = require("../models/user");
const { generateToken } = require("../config/tokens");

userLoginRoutes.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("email", email);
  console.log("password", password);

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      else {
        const payload = {
          email: user.email,
          username: user.username,
        };

        const token = generateToken(payload);
        res.cookie("token", token);
        res.send(payload);
      }
    });
  });
});

module.exports = userLoginRoutes;

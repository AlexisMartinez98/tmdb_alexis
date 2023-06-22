const express = require("express");
const userLoginRoutes = express.Router();
const User = require("../models/user");
const { generateToken, validateToken } = require("../config/tokens");

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

userLoginRoutes.get("/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(418).send("no hay user");
  }
  const { payload } = validateToken(token);
  res.send(payload);
});

userLoginRoutes.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = userLoginRoutes;

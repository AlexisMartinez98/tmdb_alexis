const express = require("express");
const userLoginRoutes = express.Router();
const User = require("../models/user");
const { generateToken, validateToken } = require("../config/tokens");

userLoginRoutes.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("email", email);
  console.log("password", password);

  User.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        return res.status(404).json("Usuario no encontrado");
      } else {
        user.validatePassword(password).then((isValid) => {
          if (!isValid) {
            return res.status(401).json("Contraseña incorrecta");
          } else {
            const payload = {
              email: user.email,
              username: user.username,
            };
            const token = generateToken(payload);
            res.cookie("token", token);
            res.status(200).json(payload);
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json("Error interno del servidor");
    });
});

userLoginRoutes.get("/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(418).send("no hay user");
  }
  const { payload } = validateToken(token);
  console.log("payload", payload);
  res.send(payload);
});

userLoginRoutes.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = userLoginRoutes;

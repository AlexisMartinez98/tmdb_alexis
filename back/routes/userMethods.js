const axios = require("axios");
const express = require("express");
const { Op } = require("sequelize");
const Favorites = require("../models/favorites");
const User = require("../models/user");

const userMethods = express.Router();

userMethods.get("/:username", (req, res) => {
  const { username } = req.params;

  User.findOne({
    where: { username },
    include: [{ model: Favorites, as: "favorites" }],
  })
    .then((user) => {
      if (user) {
        res.json(user.favorites);
      } else {
        res.status(404).json({ error: "Usuario no encontrado" });
      }
    })
    .catch((error) => {
      console.error("Error al obtener la película:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    });
});

userMethods.post("/:username/add", (req, res) => {
  const { category, dbId } = req.body;
  const { username } = req.params;

  User.findOne({ where: { username } })
    .then((user) => {
      if (user) {
        return Favorites.findOrCreate({
          where: {
            dbId: dbId,
            category: category,
            userId: user.id,
          },
        });
      } else {
        throw new Error("Usuario no encontrado");
      }
    })
    .then(([newFavorite, created]) => {
      if (created) {
        res
          .status(201)
          .send("Se ha agregado con éxito a tu lista de favoritos.");
      } else {
        res.status(409).send("El elemento ya está en tu lista de favoritos.");
      }
    })
    .catch((error) => {
      console.error("Error al agregar a favoritos:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    });
});

module.exports = userMethods;

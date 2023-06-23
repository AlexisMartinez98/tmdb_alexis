const db = require("../config/db");
const Sequelize = require("sequelize");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dbId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;

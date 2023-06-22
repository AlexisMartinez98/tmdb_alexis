const db = require("../config/db");
const Sequelize = require("sequelize");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
    },
    idSelection: {
      type: Sequelize.INTEGER,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;

const Sequelize = require("sequelize");
const db = require("../config/db");

class User extends Sequelize.Model {}
User.init(
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [4, 20],
          msg: "El username debe tener entre 4 y 20 caracteres",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 20],
          msg: "La contraseña debe tener entre 4 y 20 caracteres",
        },
      },
    },
    favorites: {
      type: Sequelize.INTEGER,
      tmdbId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
  },
  { sequelize: db, modelName: "users" }
);

module.exports = User;

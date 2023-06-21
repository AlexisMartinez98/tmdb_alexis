const db = require("../config/db");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newhash) => newhash === this.password
    );
  }
}

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
    salt: {
      type: Sequelize.STRING,
    },
    favorites: Sequelize.INTEGER,
    tmdbId: Sequelize.INTEGER,
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return bcrypt.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;

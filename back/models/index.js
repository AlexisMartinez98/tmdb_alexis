const user = require("./user");
const favorites = require("./favorites");

// asociacion entre tablas
user.hasMany(Favorite, { foreignKey: "userId" });
favorites.belongsTo(User, { foreignKey: "userId" });

module.exports = { user, favorites };

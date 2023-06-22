const user = require("./user");
const favorites = require("./favorites");

// asociacion entre tablas
user.hasMany(favorites, { foreignKey: "userId" });
favorites.belongsTo(user, { foreignKey: "userId" });

module.exports = { user, favorites };

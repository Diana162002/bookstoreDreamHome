const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    define: { timestamps: false }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.order = require("./order.model")(sequelize, Sequelize);
db.book = require("./book.model")(sequelize, Sequelize);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// M:M(N:M) -> BelongsToMany Association 
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "role_id",
  otherKey: "user_id",
  define: {
    timestamps: false
  }
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id",
  define: {
    timestamps: false
  }
});



db.user.hasMany(db.order, {
  foreignKey: "id_order",
})
db.order.belongsTo(db.user, {
  foreignKey: "id_user",
})




db.order.hasMany(db.book, {
  foreignKey: "id_order",
})
db.book.belongsTo(db.order, {
  foreignKey: "id_book",
})

db.ROLES = [ "admin", "user"];

module.exports = db; 
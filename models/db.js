const Sequelize = require('sequelize');

const sequelize =  new Sequelize('userdb','root','root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./userModels")(sequelize, Sequelize);
db.book = require("./bookModels")(sequelize, Sequelize);


module.exports = db

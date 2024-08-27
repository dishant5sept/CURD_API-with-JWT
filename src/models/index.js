const Sequelize = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = require('./user')(sequelize, Sequelize);
const Role = require('./role')(sequelize, Sequelize);
const Resource = require('./resource')(sequelize, Sequelize);

User.belongsTo(Role);
Role.hasMany(User);

module.exports = {
  sequelize,
  User,
  Role,
  Resource
};

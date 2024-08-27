module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });
  return Resource;
};

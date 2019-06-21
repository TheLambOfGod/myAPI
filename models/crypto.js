'use strict';
module.exports = (sequelize, DataTypes) => {
  const crypto = sequelize.define('crypto', {
    name: DataTypes.STRING,
    lastPrice: DataTypes.DOUBLE,
    issuanceCap: DataTypes.DECIMAL,
    rank: DataTypes.INTEGER
  }, {});
  crypto.associate = function(models) {
    // associations can be defined here
  };
  return crypto;
};
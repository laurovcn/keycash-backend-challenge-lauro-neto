'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class propertys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  propertys.init({
    localization: DataTypes.STRING,
    floors: DataTypes.STRING,
    years: DataTypes.STRING,
    room: DataTypes.STRING,
    size: DataTypes.STRING,
    parkingspaces: DataTypes.STRING
  }, {
    paranoid: true, 
    sequelize,
    modelName: 'propertys',
  });
  return propertys;
};
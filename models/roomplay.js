'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roomplay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Roomplay.init({
    roomName: DataTypes.STRING,
    player1: DataTypes.INTEGER,
    player2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Roomplay',
  });
  return Roomplay;
};
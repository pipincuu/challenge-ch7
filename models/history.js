'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      History.belongsTo(models.Roomplay, {
        foreignKey: "roomId",
        as: "Roomplay",
      })
    }
  }
  History.init({
    pilihanPlayer1: DataTypes.STRING,
    pilihanPlayer2: DataTypes.STRING,
    winner: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};
'use strict';
const { Model } = require('sequelize');

const bycrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Superadmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async register({ username, password}) {
      const encryptedPassword = await bycrypt.hash(password, 10);

      return this.create({ username, password:encryptedPassword });
    }

    static async authenticate({ username, password}) {
      try {
        const superadmin = await this.findOne({ where: { username } });
        if (!superadmin) return Promise.reject("User not found");
        const isPasswordValid = await bycrypt.compare(password, superadmin.password);
        if (!isPasswordValid) return Promise.reject("Wrong password");
        return Promise.resolve(superadmin);
      } catch (err) {
        return Promise.reject(err);
      }
    }

  }
  Superadmin.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Superadmin',
  });
  return Superadmin;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  };
  wallet.init({
    
    adress: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      id: true
    },

    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    coins: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wallet',
  });
  return wallet;
};

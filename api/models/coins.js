'use strict';
const {
  Model
} = require('sequelize');
const wallet = require('./wallet');
module.exports = (sequelize, DataTypes) => {
  class coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      coins.hasMany(models.transaction, {
        foreignKey: 'transaction_adress'
      })
      coins.belongsTo(models.wallet, {
        foreignKey: 'wallet_adress'
      })
      coins.belongsTo(models.transaction, {
        foreignKey: 'transaction_adress'
      })
      
      
    }
    
  };
  coins.init({
    adress: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      id: true
    },
    coin: DataTypes.STRING,
    fullName: DataTypes.STRING,
    amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coins',
  });
  return coins;
};

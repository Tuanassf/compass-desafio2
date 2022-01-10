'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coins', {
      adress: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        id: true
      },
      coin: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
           
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coins');
  }
};


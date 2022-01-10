'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      adress: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        id: true
      },
      value: {
        type: Sequelize.STRING
      },
      dateTime: {
        type: Sequelize.DATE
      },
      sendTo: {
        type: Sequelize.DATE
      },
      receiveFrom: {
        type: Sequelize.STRING
      },
      currentCotation: {
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
    await queryInterface.dropTable('transactions');
  }
};

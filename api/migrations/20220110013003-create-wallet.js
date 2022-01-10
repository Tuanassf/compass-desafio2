'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wallets', {
      adress: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        id:true
      },
      name: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATEONLY
      },
      coin: {
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
    await queryInterface.dropTable('wallets');
  }
};


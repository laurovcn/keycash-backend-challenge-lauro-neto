'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('propertys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      localization: {
        type: Sequelize.STRING
      },
      floors: {
        type: Sequelize.STRING
      },
      years: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      garage: {
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
    await queryInterface.dropTable('propertys');
  }
};
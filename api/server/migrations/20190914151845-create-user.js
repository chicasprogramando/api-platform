'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      auth_sub: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      is_mentor: {
        type: Sequelize.BOOLEAN
      },
      accepted_terms: {
        type: Sequelize.BOOLEAN
      },
      completed_profile: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
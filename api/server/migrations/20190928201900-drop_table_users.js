'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.dropTable('Users');
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    auth_sub: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    user_name: {
      type: Sequelize.STRING
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
  }
};

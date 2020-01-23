"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('Profiles', 'UserId', {
      type: Sequelize.UUID,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Profiles', 'UserId');
  }
};

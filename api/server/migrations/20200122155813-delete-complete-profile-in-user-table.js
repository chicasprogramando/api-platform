"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "completed_profile");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Users",
      "completed_profile",
      Sequelize.BOOLEAN
    );
  }
};

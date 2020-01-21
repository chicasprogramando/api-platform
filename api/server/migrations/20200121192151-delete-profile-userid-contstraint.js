'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Profiles", "UserId");
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Profiles", "UserId", {
      type: Sequelize.UUID,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  }
};

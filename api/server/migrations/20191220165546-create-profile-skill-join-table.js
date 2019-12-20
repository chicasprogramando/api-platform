const uuid = require("uuid/v4");
("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Profile_Skills", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()")
        },
        ProfileId: {
          type: Sequelize.UUID,
          references: {
            model: "Profiles",
            key: "id"
          },
          onDelete: 'cascade'
        },
        SkillId: {
          type: Sequelize.UUID,
          references: {
            model: "Skills",
            key: "id"
          },
          onDelete: 'cascade'
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
    return queryInterface.dropTable("Profile_Skills");
  }
};

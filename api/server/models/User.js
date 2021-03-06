"use strict";
const uuid = require("uuid/v4");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid(),
      },
      user_name: DataTypes.STRING,
      firebase_id: DataTypes.STRING,
      email: DataTypes.STRING,
      accepted_terms: DataTypes.BOOLEAN,
      ProfileId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Profiles",
          key: "id",
        },
      },
    },
    {}
  );

  User.associate = function (models) {
    User.hasOne(models.Profile, {
      foreignKey: "UserId",
      as: "profile",
      onDelete: "CASCADE",
      hooks: true,
    });
  };

  User.addHook("beforeSave", async (user) => (user.dataValues.id = uuid()));

  return User;
};

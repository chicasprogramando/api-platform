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
        defaultValue: uuid()
      },
      user_name: DataTypes.STRING,
      auth_sub: DataTypes.STRING,
      email: DataTypes.STRING,
      accepted_terms: DataTypes.BOOLEAN,
      completed_profile: DataTypes.BOOLEAN
    },
    {}
  );

  User.associate = function(models) {
    User.hasOne(models.Profile, { foreignKey: "UserId", as: "profile" })
  };

  return User;
};

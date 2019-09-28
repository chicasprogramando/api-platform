"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      auth_sub: DataTypes.STRING,
      email: DataTypes.STRING,
      is_mentor: DataTypes.BOOLEAN,
      accepted_terms: DataTypes.BOOLEAN,
      completed_profile: DataTypes.BOOLEAN
    },
    {}
  );

  // User.associate = function(models) {
  //   // associations can be defined here
  // };

  return User;
};

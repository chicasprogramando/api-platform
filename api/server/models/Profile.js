"use strict";
const uuid = require("uuid/v4");

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid()
      },
      image_path: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      github: DataTypes.STRING,
      twitter: DataTypes.STRING,
      UserId: {
        type: DataTypes.UUID,
        references: {
          model: 'Users', 
          key: 'id'
       }
  }
    },
    {}
  );
  // TODO: We still need to add profile type (frontend, backend, qa)

  Profile.associate = models => {
    Profile.hasOne(models.User, { foreignKey: 'ProfileId', as: "user"  })
  };

  return Profile;
};

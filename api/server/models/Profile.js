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
      name: DataTypes.STRING,
      image_path: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      github: DataTypes.STRING,
      twitter: DataTypes.STRING,
      UserId: {
        type: DataTypes.UUID,
        references: {
          model: "Users",
          key: "id"
        }
      }
    },
    {}
  );

  Profile.associate = models => {
    Profile.hasOne(models.User, {
      foreignKey: "ProfileId",
      as: "user"
    });
    Profile.belongsToMany(models.Specialty, {
      as: "specialty",
      through: "Profile_Specialties",
      foreignKey: "ProfileId",
      otherKey: "SpecialtyId"
    });
    Profile.belongsToMany(models.Skill, {
      as: "skill",
      through: "Profile_Skills",
      foreignKey: "ProfileId",
      otherKey: "SkillId"
    });
  };

  return Profile;
};

"use strict";
const uuid = require("uuid/v4");

module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    "Skill",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid()
      },
      description: DataTypes.STRING
    },
    {}
  );

  Skill.associate = models => {
    Skill.belongsToMany(models.Profile, { as: 'profile', through: 'Profile_Skills', foreignKey: 'SkillId',  otherKey: 'ProfileId' })
  };

  return Skill;
};

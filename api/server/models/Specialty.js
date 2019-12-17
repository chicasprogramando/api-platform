"use strict";
const uuid = require("uuid/v4");

module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define(
    "Specialty",
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

  Specialty.associate = models => {
    Specialty.belongsToMany(models.Profile, { as: 'profile', through: 'Profile_Specialties', foreignKey: 'SpecialtyId',  otherKey: 'ProfileId' })
  };

  return Specialty;
};

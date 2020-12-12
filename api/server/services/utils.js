const database = require("../models");
const profileAssociations = [
  {
    model: database.Specialty,
    as: "specialty",
    attributes: ["id", "description"],
    through: { attributes: [] },
  },
  {
    model: database.Skill,
    as: "skill",
    attributes: ["id", "description"],
    through: { attributes: [] },
  },
];

module.exports = profileAssociations;

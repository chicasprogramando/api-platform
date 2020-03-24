const database = require("../models");
const Sequelize = require("sequelize");

const Op = Sequelize.Op;

const associations = [
  {
    model: database.Specialty,
    as: "specialty",
    attributes: ["id", "description"],
    through: { attributes: [] }
  },
  {
    model: database.Skill,
    as: "skill",
    attributes: ["id", "description"],
    through: { attributes: [] }
  }
];

class ProfileService {
  static async addProfile(newProfile) {
    try {
      return await database.Profile.create(newProfile);
    } catch (error) {
      throw error;
    }
  }
  static async getProfile(id) {
    try {
      const profile = await database.Profile.findOne({
        where: { id: id },
        include: associations
      });
      return profile;
    } catch (error) {
      throw error;
    }
  }
  static async getAllProfiles() {
    try {
      return await database.Profile.findAll({ include: associations });
    } catch (error) {
      throw error;
    }
  }
  static async updateProfile(id, updatedProfile) {
    try {
      const profileToUpdate = await database.Profile.findOne({
        where: { id: id }
      });
      if (profileToUpdate) {
        return await database.Profile.update(updatedProfile, {
          where: { id: id },
          include: associations
        });
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async deleteProfile(id) {
    try {
      const profileToDelete = await database.Profile.findOne({
        where: { id: id }
      });
      if (profileToDelete) {
        const deletedProfile = await database.Profile.destroy({
          where: { id: id }
        });
        return deletedProfile;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async searchProfiles({ skills, specialties }) {
    try {
      /**
       * Skills and specialties will alway be returned
       * If user want's skills [react, redux]
       * we return all profiles with react, redux PLUS the specialties of those profiles
       * Same the other way around. If user searches specialties [Back End]
       * we return all profiles that have backend PLUS their skills
       */
      const include = [
        {
          model: database.Skill,
          as: "skill",
          attributes: ["id", "description"],
          through: {
            attributes: []
          },
          where: skills ? { description: { [Op.in]: [...skills] } } : "",
        },
        {
          model: database.Specialty,
          as: "specialty",
          attributes: ["id", "description"],
          through: {
            attributes: []
          },
          where: specialties
            ? { description: { [Op.in]: [...specialties] } }
            : ""
        }
      ];

      const profilesMatched = await database.Profile.findAll({ include });
      const ids = profilesMatched.map(p => p.dataValues.id)

      const completeProfiles = await database.Profile.findAll({
        where: { id: [...ids] },
        include: associations
      });

      return completeProfiles
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProfileService;

const database = require("../models");

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
        include: [
          {
            model: database.Specialty,
            as: "specialty",
            attributes: ['id', 'description'],
            through: {attributes: []}
          },
          {
            model: database.Skill,
            as: "skill",
            attributes: ['id', 'description'],
            through: {attributes: []}
          }
        ]
      });
      return profile;
    } catch (error) {
      throw error;
    }
  }
  static async getAllProfiles() {
    try {
      return await database.Profile.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async updateProfile(id, updatedProfile) {
    try {
      const profileToUpdate = await database.Profile.findOne({
        where: { id: id },
      });
      if (profileToUpdate) {
        await database.Profile.update(updatedProfile, { where: { id: id } });
        return updatedProfile;
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
}

module.exports = ProfileService;

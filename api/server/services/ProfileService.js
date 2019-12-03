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
        where: { id: id }
      });
      return profile;
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
        await database.Profile.update(updatedProfile, { where: { id: id } });
        return profileToUpdate;
      }
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

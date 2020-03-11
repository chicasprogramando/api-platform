const database = require("../models");

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
       return await database.Profile.update(updatedProfile, { where: { id: id }, include: associations });
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

  static async searchProfiles(filters) {
    console.log({filters});

      return await database.Profile.findAll({ include: associations }, where: {skill});
https://stackoverflow.com/questions/38918840/querying-on-where-association-in-sequelize
    hp_country.findAll({
    attributes: ['country_id', 'country_name'],
    where: {
        country_status: 1,
        country_id: 1
    },
    include: [{
        model: hp_state,
        attributes: ['state_id', 'state_name'],
        where: {
            state_status: 1,
            state_name: {
                $like: '%ta%'
            }
        }
    }]
});
  }
}

module.exports = ProfileService;

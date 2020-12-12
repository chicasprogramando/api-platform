const database = require("../models");

const associations = [
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
        include: associations,
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
        where: { id: id },
      });
      if (profileToUpdate) {
        return await database.Profile.update(updatedProfile, {
          where: { id: id },
          include: associations,
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
        where: { id: id },
      });
      if (profileToDelete) {
        return await database.Profile.destroy({
          where: { id: id },
        });
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async searchProfiles({ skills, specialties }) {
    try {
      /**
       * We need to map specialties and skills because when we string interpolate
       * to build the AND query the single quotes are lost.
       */
      const withSpecialties =
        specialties &&
        `AND "SP"."description" = ANY(ARRAY[${specialties.map(
          (x) => "'" + x + "'"
        )}])`;
      const withSkills =
        skills &&
        `AND "SK"."description" = ANY(ARRAY[${skills.map(
          (x) => "'" + x + "'"
        )}])`;

      /**
       * We run a raw query because sequelize can't handle this special query case
       * We need all profiles that have certain specialties and certain skills given
       */
      const q = `SELECT DISTINCT "PR".id
       FROM  public."Profiles" AS "PR", 
             public."Skills" AS "SK",
             public."Profile_Skills" as "PSK",
             public."Profile_Specialties" as "PSP",
             public."Specialties" as "SP"
       WHERE "PR".id = "PSK"."ProfileId"
       AND "SK".id = "PSK"."SkillId" 
       AND "PR".id = "PSP"."ProfileId"
       AND "SP".id = "PSP"."SpecialtyId" 
       ${withSkills ? withSkills : ""}
       ${withSpecialties ? withSpecialties : ""}
       `;

      const [results, _] = await database.sequelize.query(q);

      return results;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProfileService;

const database = require("../models");

class SpecialtyService {
  static async addSpecialty(newSpecialty) {
    try {
      return await database.Specialty.create(newSpecialty);
    } catch (error) {
      throw error;
    }
  }
  static async getSpecialty(id) {
    try {
      const specialty = await database.Specialty.findOne({
        where: { id: id }
      });
      return specialty;
    } catch (error) {
      throw error;
    }
  }
  static async getAllSpecialties() {
    try {
      return await database.Specialty.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async updateSpecialty(id, updatedSpecialty) {
    try {
      const specialtyToUpdate = await database.Specialty.findOne({
        where: { id: id },
      });
      if (specialtyToUpdate) {
        await database.Specialty.update(updatedSpecialty, { where: { id: id } });
        return updatedSpecialty;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async deleteSpecialty(id) {
    try {
      const specialtyToDelete = await database.Specialty.findOne({
        where: { id: id }
      });
      if (specialtyToDelete) {
        const deletedSpecialty = await database.Specialty.destroy({
          where: { id: id }
        });
        return deletedSpecialty;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SpecialtyService;

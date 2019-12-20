const database = require("../models");

class DBService {
  static async create(model, newInstance) {
    try {
      return await database[model].create(newInstance);
    } catch (error) {
      throw error;
    }
  }
  static async get(model, id) {
    try {
      const instance = await database[model].findOne({
        where: { id: id }
      });
      return instance;
    } catch (error) {
      throw error;
    }
  }
  static async getAll(model) {
    try {
      return await database[model].findAll();
    } catch (error) {
      throw error;
    }
  }
  static async update(model, id, updatedInstance) {
    try {
      const instanceToUpdate = await database[model].findOne({
        where: { id: id },
      });
      if (instanceToUpdate) {
        await database[model].update(updatedInstance, { where: { id: id } });
        return updatedInstance;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async delete(model, id) {
    try {
      const instanceToDelete = await database[model].findOne({
        where: { id: id }
      });
      if (instanceToDelete) {
        const deletedInstance = await database[model].destroy({
          where: { id: id }
        });
        return deletedInstance;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DBService;

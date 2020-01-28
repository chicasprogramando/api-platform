const database = require("../models");

class UserService {
  static async getAllUsers() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updatedUser) {
    try {
      const userToUpdate = await database.User.findOne({
        where: { id: id }
      });
      if (userToUpdate) {
        await database.User.update(updatedUser, { where: { id: id } });
        return updatedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id) {
    try {
      const user = await database.User.findOne({
        where: { id: id },
        include: [
          {
            model: database.Profile,
            as: "profile"
          }
        ]
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getUserByEmail(email) {
    try {
      const user = await database.User.findOne({
        where: { email: email },
        include: [
          {
            model: database.Profile,
            as: "profile"
          }
        ]
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.User.findOne({
        where: { id: id }
      });

      if (userToDelete) {
        const deletedUser = await database.User.destroy({
          where: { id: id }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;

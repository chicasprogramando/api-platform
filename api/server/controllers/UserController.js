const UserService = require("../services/UserService");
const Util = require("../utils/Utils");
const utils = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        utils.setSuccess(200, "Users retrieved", allUsers);
      } else {
        utils.setSuccess(200, "No users found");
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error);
      return utils.send(res);
    }
  }

  static async addUser(req, res) {
    if (
      !req.body.auth_sub ||
      !req.body.email ||
      !req.body.is_mentor ||
      !req.body.accepted_terms ||
      !req.body.completed_profile
    ) {
      utils.setError(400, "Please provide complete details");
      return utils.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserService.addUser(newUser);
      utils.setSuccess(201, "Book Added!", createdUser);
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      utils.setError(400, "Please input a valid numeric value");
      return utils.send(res);
    }
    try {
      const updatedUser = await UserService.updateUser(id, alteredUser);
      if (!updatedUser) {
        utils.setError(404, `Cannot find book with the id: ${id}`);
      } else {
        utils.setSuccess(200, "User updated", updatedUser);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error);
      return utils.send(res);
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      utils.setError(400, "Please input a valid numeric value");
      return utils.send(res);
    }

    try {
      const user = await UserService.getUser(id);

      if (!user) {
        utils.setError(404, `Cannot find user with the id ${id}`);
      } else {
        utils.setSuccess(200, "Found Book", user);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error);
      return utils.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      utils.setError(400, "Please provide a numeric value");
      return utils.send(res);
    }

    try {
      const userToDelete = await UserService.deleteUser(id);

      if (userToDelete) {
        utils.setSuccess(200, "User deleted");
      } else {
        utils.setError(404, `User with the id ${id} cannot be found`);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error);
      return utils.send(res);
    }
  }
}

module.exports = UserController;

const UserService = require("../services/UserService");
const Util = require("../utils/Utils");
const utils = new Util();

class UserController {
  static async addUser(req, res) {
    if (!req.body.user_name || !req.body.auth_sub || !req.body.email) {
      utils.setError(400, "Please provide complete details");
      return utils.send(res);
    }
    try {
      const user = await UserService.getUserByEmail(req.body.email);
      if (!user) {
        const newUser = req.body;
        newUser.accepted_terms = false;
        const createdUser = await UserService.addUser(newUser);
        utils.setSuccess(201, "User Added!", createdUser);
        return utils.send(res);
      } else {
        utils.setError(400, "User already exists");
        return utils.send(res);
      }
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }

  static async updateUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    try {
      const updatedUser = await UserService.updateUser(id, alteredUser);
      if (!updatedUser) {
        utils.setError(404, `Cannot find user with the id: ${id}`);
      } else {
        utils.setSuccess(200, "User updated", updatedUser);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }

  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        utils.setSuccess(200, "Users retrieved", allUsers);
      } else {
        utils.setSuccess(200, "No users found", []);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }

  static async getUser(req, res) {
    const { auth_sub } = req.params;
    try {
      const user = await UserService.getUser(auth_sub);
      if (user) {
        utils.setSuccess(200, "Found User", user);
      } else {
        utils.setError(404, `Cannot find user`);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const userToDelete = await UserService.deleteUser(id);

      if (userToDelete) {
        utils.setSuccess(200, "User deleted");
      } else {
        utils.setError(404, `User with the id ${id} cannot be found`);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
}

module.exports = UserController;

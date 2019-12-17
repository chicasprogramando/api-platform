const ProfileService = require("../services/ProfileService");
const UserService = require("../services/UserService");
const Util = require("../utils/Utils");
const utils = new Util();

class ProfileController {
  static async addProfile(req, res) {
    if (req.body.linkedin || req.body.github || req.body.twitter) {
      const newProfile = req.body;
      try {
        const createdProfile = await ProfileService.addProfile(newProfile);
        // once profile is created, update user to set ProfilId to the ID of the created profile
        await UserService.updateUser(newProfile.UserId, {
          ProfileId: createdProfile.id
        });

        if (req.body.specialties) {
          const specialties = req.body.specialties;
          specialties.map(async s => await createdProfile.addSpecialty(s.id));
        }
        utils.setSuccess(201, "Profile Created!", createdProfile);
        return utils.send(res);
      } catch (error) {
        utils.setError(400, error.message);
        return utils.send(res);
      }
    } else {
      utils.setError(400, "Please provide complete details");
      return utils.send(res);
    }
  }
  static async getProfile(req, res) {
    const { id } = req.params;
    try {
      const profile = await ProfileService.getProfile(id);
      if (!profile) {
        utils.setError(404, `Cannot find profile`);
      } else {
        utils.setSuccess(200, "Found Profile", profile);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }
  static async getAllProfiles(req, res) {
    try {
      const allProfiles = await ProfileService.getAllProfiles();
      if (allProfiles.length > 0) {
        utils.setSuccess(200, "Profiles retrieved", allProfiles);
      } else {
        utils.setSuccess(200, "No profiles found", []);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
  static async updateProfile(req, res) {
    const alteredProfile = req.body;
    const { id } = req.params;
    try {
      const updatedProfile = await ProfileService.updateProfile(
        id,
        alteredProfile
      );
      if (!updatedProfile) {
        utils.setError(404, `Cannot find profile with the id: ${id}`);
      } else {
        utils.setSuccess(200, "Profile updated", updatedProfile);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }
  static async deleteProfile(req, res) {
    const { id } = req.params;
    try {
      const profileToDelete = await ProfileService.deleteProfile(id);
      if (profileToDelete) {
        utils.setSuccess(200, "Profile deleted");
      } else {
        utils.setError(404, `Profile with the id ${id} cannot be found`);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
}

module.exports = ProfileController;

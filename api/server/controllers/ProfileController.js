const ProfileService = require("../services/ProfileService");
const Util = require("../utils/Utils");
const utils = new Util();

class ProfileController {
  static async addProfile(req, res) {
    if (req.body.linkedin || req.body.github || req.body.twitter) {
      const newProfile = req.body;
      try {
        const createdProfile = await ProfileService.addProfile(newProfile);
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
    } catch (error) {
      utils.setError(404, error);
      return utils.send(res);
    }
  }
  static async deleteProfile(req, res){
      const {id} = req.params
      try {
          const profileToDelete = await ProfileService.deleteProfile(id)
          if(profileToDelete){
              utils.setSuccess(200, "Profile deleted")
          } else {
              utils.setError(404, `Profile with the id ${id} cannot be found`)
          }
          return utils.send(res)
      } catch (error) {
          utils.setError(400, error)
          return utils.send(res)
      }
  }
}

module.exports = ProfileController
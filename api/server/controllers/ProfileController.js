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
          ProfileId: createdProfile.id,
        });

        if (req.body.specialties) {
          const specialties = req.body.specialties;
          specialties.map(async (s) => await createdProfile.addSpecialty(s.id));
        }
        if (req.body.skills) {
          const skills = req.body.skills;
          skills.map(async (s) => await createdProfile.addSkill(s.id));
        }

        utils.setSuccess(201, "Profile Created!", createdProfile);
        utils.send(res);
      } catch (error) {
        utils.setError(400, error.message).send(res);
      }
    } else {
      utils.setError(400, "Please provide complete details").send(res);
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
      utils.send(res);
    } catch (error) {
      utils.setError(404, error.message).send(res);
    }
  }
  static async getAllProfiles(req, res) {
    try {
      if (req.query.skills || req.query.specialties) {
        const skills = req.query.skills ? req.query.skills.split(",") : null;
        const specialties = req.query.specialties
          ? req.query.specialties.split(",")
          : null;

        const profilesMatched = await ProfileService.searchProfiles({
          skills,
          specialties,
        });

        utils.setSuccess(200, "Profiles found", profilesMatched);
      } else {
        const allProfiles = await ProfileService.getAllProfiles();
        if (allProfiles.length > 0) {
          utils.setSuccess(200, "Profiles retrieved", allProfiles);
        } else {
          utils.setSuccess(200, "No profiles found", []);
        }
      }

      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }

  static async updateProfile(req, res) {
    const { id } = req.params;
    try {
      // 1) Get prev. profile
      const profile = await ProfileService.getProfile(id);

      if (!profile) {
        utils.setError(404, `Cannot find profile with the id: ${id}`);
      } else {
        // LELE TODO: Move all this to a separated function, it's almost the same create logic
        if (req.body.specialties || req.body.skills) {
          // 2) Delete profile
          await ProfileService.deleteProfile(id);
          // 3) Format the new profile
          const newProfile = { id, UserId: profile.UserId, ...req.body };
          // 4) Create the new profile
          const createdProfile = await ProfileService.addProfile(newProfile);
          // once profile is created, update user to set ProfilId to the ID of the created profile
          await UserService.updateUser(newProfile.UserId, {
            ProfileId: createdProfile.id,
          });

          // 5) Add specialties and skills
          // const { specialties, skills } = req.body;
          // if (specialties) {
          //   Promise.all(specialties.map((s) => createdProfile.addSpecialty(s)));
          // }
          // if (skills) {
          //   Promise.all(skills.map((s) => createdProfile.addSkill(s)));
          // }
        } else {
          await ProfileService.updateProfile(id, { ...req.body });
        }

        const updatedProfile = await ProfileService.getProfile(id);
        utils.setSuccess(200, "Profile updated", updatedProfile);
      }

      utils.send(res);
    } catch (error) {
      utils.setError(404, error.message).send(res);
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
      utils.send(res);
    } catch (error) {
      utils.setError(400, error.message).send(res);
    }
  }
}

module.exports = ProfileController;

const DBService = require("../services/DBService");
const Util = require("../utils/Utils");
const utils = new Util();

class SkillController {
  static async addSkill(req, res) {
    if (req.body.description) {
      const newSkill = req.body;
      try {
        const createdSkill = await DBService.create("Skill", newSkill)
        utils.setSuccess(201, "Skill Created!", createdSkill);
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
  static async getSkill(req, res) {
    const { id } = req.params;
    try {
      const skill = await DBService.get("Skill", id);
      if (!skill) {
        utils.setError(404, `Cannot find skill`);
      } else {
        utils.setSuccess(200, "Found Skill", skill);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }
  static async getAllSkills(req, res) {
    try {
      const allSkills = await DBService.getAll("Skill");
      if (allSkills.length > 0) {
        utils.setSuccess(200, "Skills retrieved", allSkills);
      } else {
        utils.setSuccess(200, "No skills found", []);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
  static async updateSkill(req, res) {
    const alteredSkill = req.body;
    const { id } = req.params;
    try {
      const updatedSkill = await DBService.update("Skill",
        id,
        alteredSkill
      );
      if (!updatedSkill) {
        utils.setError(404, `Cannot find skill with the id: ${id}`);
      } else {
        utils.setSuccess(200, "skill updated", updatedSkill);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }
  static async deleteSkill(req, res) {
    const { id } = req.params;
    try {
      const skillToDelete = await DBService.delete("Skill", id);
      if (skillToDelete) {
        utils.setSuccess(200, "Skill deleted");
      } else {
        utils.setError(404, `Skill with the id ${id} cannot be found`);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
}

module.exports = SkillController;

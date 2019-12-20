const SpecialtyService = require("../services/SpecialtyService");
const Util = require("../utils/Utils");
const utils = new Util();

class SpecialtyController {
  static async addSpecialty(req, res) {
    if (req.body.description) {
      const newSpecialty = req.body;
      try {
        const createdSpecialty = await SpecialtyService.addSpecialty(newSpecialty);
        utils.setSuccess(201, "Specialty Created!", createdSpecialty);
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
  static async getSpecialty(req, res) {
    const { id } = req.params;
    try {
      const specialty = await SpecialtyService.getSpecialty(id);
      if (!specialty) {
        utils.setError(404, `Cannot find specialty`);
      } else {
        utils.setSuccess(200, "Found Specialty", specialty);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }
  static async getAllSpecialties(req, res) {
    try {
      const allSpecialties = await SpecialtyService.getAllSpecialties();
      if (allSpecialties.length > 0) {
        utils.setSuccess(200, "Specialties retrieved", allSpecialties);
      } else {
        utils.setSuccess(200, "No specialties found", []);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
  static async updateSpecialty(req, res) {
    const alteredSpecialty = req.body;
    const { id } = req.params;
    try {
      const updatedSpecialty = await SpecialtyService.updateSpecialty(
        id,
        alteredSpecialty
      );
      if (!updatedSpecialty) {
        utils.setError(404, `Cannot find specialty with the id: ${id}`);
      } else {
        utils.setSuccess(200, "Specialty updated", updatedSpecialty);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(404, error.message);
      return utils.send(res);
    }
  }
  static async deleteSpecialty(req, res) {
    const { id } = req.params;
    try {
      const specialtyToDelete = await SpecialtyService.deleteSpecialty(id);
      if (specialtyToDelete) {
        utils.setSuccess(200, "Specialty deleted");
      } else {
        utils.setError(404, `Specialty with the id ${id} cannot be found`);
      }
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
}

module.exports = SpecialtyController;

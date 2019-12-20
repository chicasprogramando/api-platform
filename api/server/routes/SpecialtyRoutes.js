const express = require("express");
const SpecialtyController = require("../controllers/SpecialtyController");

const router = express.Router();

router.post("/", SpecialtyController.addSpecialty);
router.get("/:id", SpecialtyController.getSpecialty);
router.get("/", SpecialtyController.getAllSpecialties);
router.put("/:id", SpecialtyController.updateSpecialty);
router.delete("/:id", SpecialtyController.deleteSpecialty);

module.exports = router;

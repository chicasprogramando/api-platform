const express = require("express");
const SkillController = require("../controllers/SkillController");

const router = express.Router();

router.post("/", SkillController.addSkill);
router.get("/:id", SkillController.getSkill);
router.get("/", SkillController.getAllSkills);
router.put("/:id", SkillController.updateSkill);
router.delete("/:id", SkillController.deleteSkill);

module.exports = router;

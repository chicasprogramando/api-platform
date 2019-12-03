const express = require("express");
const ProfileController = require("../controllers/ProfileController");

const router = express.Router();

router.post("/", ProfileController.addProfile);
router.get("/:id", ProfileController.getProfile);
router.put("/:id", ProfileController.updateProfile);
router.delete("/:id", ProfileController.deleteProfile);

module.exports = router;

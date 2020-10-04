const express = require("express");
const checkJwt = require("../middlewares/secure");
const ProfileController = require("../controllers/ProfileController");

const router = express.Router();

router.post("/", ProfileController.addProfile);
router.get("/:id", ProfileController.getProfile);
router.get("/", ProfileController.getAllProfiles);
router.put("/:id", checkJwt, ProfileController.updateProfile);
router.delete("/:id", checkJwt, ProfileController.deleteProfile);

module.exports = router;

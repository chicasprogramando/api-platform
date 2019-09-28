const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUser);
router.get("/:auth_sub", UserController.getUser);
router.put("/:id", UserController.updatedUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;

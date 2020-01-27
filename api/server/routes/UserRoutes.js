const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/", UserController.addUser);
router.get("/:id", UserController.getUser);
router.get("/", UserController.getAllUsers);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;

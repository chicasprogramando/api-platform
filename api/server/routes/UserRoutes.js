const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUser);

router.post("/signin", UserController.signIn);
router.post("/", UserController.addUser);

router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;

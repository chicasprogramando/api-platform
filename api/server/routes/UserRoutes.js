const express = require("express");
const { checkJwt } = require("../middlewares/secure");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUser);

router.post("/login", checkJwt, UserController.login);
router.post("/", checkJwt, UserController.addUser);

router.put("/:id", checkJwt, UserController.updateUser);
router.delete("/:id", checkJwt, UserController.deleteUser);

module.exports = router;

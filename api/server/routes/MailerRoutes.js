const express = require("express");
const MailerController = require("../controllers/MailerController");

const router = express.Router();

router.post("/", MailerController.sendMail);

module.exports = router;

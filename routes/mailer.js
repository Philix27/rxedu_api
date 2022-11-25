const express = require("express");
const router = express.Router();

const { sendMail } = require("../controllers/mailer");

router.route("/").get(sendMail);

module.exports = router;

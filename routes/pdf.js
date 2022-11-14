const express = require("express");
const router = express.Router();

const { createPdf } = require("../controllers/pdf");

router.route("/").get(createPdf);

module.exports = router;

const express = require("express");
const router = express.Router();

const { getAll } = require("../controllers/agentsAll");

router.route("/").get(getAll);
router.route("/:id");

module.exports = router;

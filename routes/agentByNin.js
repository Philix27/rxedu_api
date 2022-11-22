const express = require("express");
const router = express.Router();

const { getAll } = require("../controllers/agentByNin");

router.route("/").get(getAll);
router.route("/:id");

module.exports = router;

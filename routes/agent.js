const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  getSingle,
  update,
  deleteAgent,
  edit,
} = require("../controllers/agent");

router.route("/").get(getAll).post(create);
router.route("/:id").get(getSingle).patch(update).delete(deleteAgent);

module.exports = router;

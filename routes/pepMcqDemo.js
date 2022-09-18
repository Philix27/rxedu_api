const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  getSingle,
  update,
  deletePepMcqDemo,
  edit,
} = require("../controllers/pepMcqDemo");

router.route("/").get(getAll).post(create);

router.route("/:id").get(getSingle).patch(update).delete(deletePepMcqDemo);

module.exports = router;

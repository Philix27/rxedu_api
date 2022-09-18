const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  getSingle,
  update,
  deletePepMcq,
  edit,
} = require("../controllers/pepMcq");

router.route("/").get(getAll).post(create);
router.route("/:id").get(getSingle).patch(update).delete(deletePepMcq);

module.exports = router;

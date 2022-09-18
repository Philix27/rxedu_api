const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  getSingle,
  update,
  deleteNote,
  edit,
} = require("../controllers/pepNote");

router.route("/").get(getAll).post(create);
router.route("/:id").get(getSingle).patch(update).delete(deleteNote);

module.exports = router;

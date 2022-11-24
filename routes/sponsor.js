const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  getSingle,
  update,
  deleteSponsor,
  edit,
} = require("../controllers/sponsor");

router.route("/").get(getAll).post(create);
router.route("/:id").get(getSingle).patch(update).delete(deleteSponsor);

module.exports = router;

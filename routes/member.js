const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  getSingle,
  update,
  deleteMember,
  edit,
} = require("../controllers/member");

router.route("/").get(getAll).post(create);
router.route("/:id").get(getSingle).patch(update).delete(deleteMember);

module.exports = router;

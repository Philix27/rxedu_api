const express = require("express");
const router = express.Router();

const {
  getAllNews,
  createNews,
  getSingleNews,
  updateNews,
  deleteNews,
} = require("../controllers/news");

router.route("/").get(getAllNews).post(createNews);
router.route("/:id").get(getSingleNews).patch(updateNews).delete(deleteNews);

module.exports = router;

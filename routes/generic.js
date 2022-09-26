const express = require("express");
const router = express.Router();

const {
  getAllGenericDrugs,
  createGenericDrug,
  getSingleGenericDrug,
  updateGenericDrug,
  deleteGenericDrug,
} = require("../controllers/genericDrug");

router.route("/").get(getAllGenericDrugs).post(createGenericDrug);
router
  .route("/:id")
  .get(getSingleGenericDrug)
  .patch(updateGenericDrug)
  .delete(deleteGenericDrug);

module.exports = router;

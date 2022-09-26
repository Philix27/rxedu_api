const express = require("express");
const router = express.Router();

const {
  getAllBrandDrug,
  createBrandDrug,
  getSingleBrandDrug,
  updateBrandDrug,
  deleteBrandDrug,
} = require("../controllers/brandDrug");

router.route("/").get(getAllBrandDrug).post(createBrandDrug);
router
  .route("/:id")
  .get(getSingleBrandDrug)
  .patch(updateBrandDrug)
  .delete(deleteBrandDrug);

module.exports = router;

const BrandDrug = require("../models/brandDrug");
// const sendQuestions = require('../db/firebase_config')
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllBrandDrugs = asyncWrapper(async (req, res, next) => {
  const queryObject = {};
  const { category } = req.query;
  if (category) {
    queryObject.category = category;
  }
  console.log(queryObject.category);
  const data = await BrandDrug.find(queryObject).sort("name");
  res.status(201).json({ data, length: data.length });
});

const createBrandDrug = asyncWrapper(async (req, res) => {
  const brandDrug = await BrandDrug.create(req.body);
  res.status(201).json(req.body);
});

const getSingleBrandDrug = asyncWrapper(async (req, res) => {
  const { id: brandDrugID } = req.params;
  const brandDrug = await BrandDrug.findOne({ _id: brandDrugID });

  if (!brandDrug) {
    return res.status(404).json(`No brandDrug with id: ${id}`);
  } else {
    return res.status(201).json({ brandDrug });
  }
});

const deleteBrandDrug = asyncWrapper(async (req, res) => {
  const { id: brandDrugID } = req.params;
  const mcq = await BrandDrug.findOneAndDelete({ _id: brandDrugID });

  if (!mcq) {
    return res.status(404).json(`No mcq with id: ${id}`);
  } else {
    return res.status(201).json({ mcq });
  }
});

const updateBrandDrug = asyncWrapper(async (req, res) => {
  const { id: brandDrugID } = req.params;
  const mcq = await McqPep.findOneAndUpdate({ _id: brandDrugID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!mcq) {
    return res.status(404).json({ msg: `No question with id: ${brandDrugID}` });
  }
  res.status(200).json({ brandDrugID });
});

const editBrandDrug = asyncWrapper(async (req, res) => {
  const { id: brandDrugID } = req.params;
  const mcq = await McqPep.findOneAndUpdate({ _id: brandDrugID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: false,
  });

  if (!mcq) {
    return res.status(404).json({ msg: `No question with id: ${brandDrugID}` });
  }
  res.status(200).json({ brandDrugID });
});

module.exports = {
  getAllBrandDrugs,
  createBrandDrug,
  getSingleBrandDrug,
  updateBrandDrug,
  deleteBrandDrug,
  editBrandDrug,
};

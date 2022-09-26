const GenericDrug = require("../models/generic");
// const sendQuestions = require('../db/firebase_config')
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllGenericDrugs = asyncWrapper(async (req, res, next) => {
  const queryObject = {};
  const { category } = req.query;
  if (category) {
    queryObject.category = category;
  }
  console.log(queryObject.category);
  const data = await GenericDrug.find(queryObject).sort("question");
  res.status(201).json({ data, length: data.length });
});

const createGenericDrug = asyncWrapper(async (req, res) => {
  const genericDrug = await GenericDrug.create(req.body);
  res.status(201).json(req.body);
});

const getSingleGenericDrug = asyncWrapper(async (req, res) => {
  const { id: genericDrugID } = req.params;
  const genericDrug = await GenericDrug.findOne({ _id: genericDrugID });

  if (!genericDrug) {
    return res.status(404).json(`No genericDrug with id: ${id}`);
  } else {
    return res.status(201).json({ genericDrug });
  }
});

const deleteGenericDrug = asyncWrapper(async (req, res) => {
  const { id: genericDrugID } = req.params;
  const mcq = await GenericDrug.findOneAndDelete({ _id: genericDrugID });

  if (!mcq) {
    return res.status(404).json(`No mcq with id: ${id}`);
  } else {
    return res.status(201).json({ mcq });
  }
});

const updateGenericDrug = asyncWrapper(async (req, res) => {
  const { id: genericDrugID } = req.params;
  const mcq = await McqPep.findOneAndUpdate({ _id: genericDrugID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!mcq) {
    return res
      .status(404)
      .json({ msg: `No question with id: ${genericDrugID}` });
  }
  res.status(200).json({ genericDrugID });
});

const editGenericDrug = asyncWrapper(async (req, res) => {
  const { id: genericDrugID } = req.params;
  const mcq = await McqPep.findOneAndUpdate({ _id: genericDrugID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: false,
  });

  if (!mcq) {
    return res
      .status(404)
      .json({ msg: `No question with id: ${genericDrugID}` });
  }
  res.status(200).json({ genericDrugID });
});

module.exports = {
  getAllGenericDrugs,
  createGenericDrug,
  getSingleGenericDrug,
  updateGenericDrug,
  deleteGenericDrug,
  editGenericDrug,
};

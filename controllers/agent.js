const Agents = require("../models/agent");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getAll = asyncWrapper(async (req, res, next) => {
  const page = req.query.page || 0;
  const agentsPerPage = 50;
  const skip = page * agentsPerPage;
  const dataList = await Agents.find();

  const data = await Agents.find()
    .sort("registrationDate")
    .skip(skip)
    .limit(agentsPerPage);
  res
    .status(201)
    .json({ length: data.length, totalCount: dataList.length, data });
});

const create = asyncWrapper(async (req, res) => {
  const data = await Agents.create(req.body);
  res.status(201).json({ data });
});

const getSingle = asyncWrapper(async (req, res, next) => {
  const { id: docID } = req.params;
  const doc = await Agents.findOne({ _id: docID });

  if (!doc) {
    return next(
      createCustomError(`No article found with the id: ${docID}`, 404)
    );
  } else {
    return res.status(201).json({ doc });
  }
});

const deleteAgent = asyncWrapper(async (req, res, next) => {
  const { id: docID } = req.params;
  const doc = await Agents.findOneAndDelete({ _id: docID });

  if (!doc) {
    return next(
      createCustomError(`No article found with the id: ${docID}`, 404)
    );
  } else {
    return res.status(201).json({ doc });
  }
});

const update = asyncWrapper(async (req, res, next) => {
  const { id: docID } = req.params;
  const doc = await Agents.findOneAndUpdate({ _id: docID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(
      createCustomError(`No article found with the id: ${docID}`, 404)
    );
  }
  res.status(200).json({ docID });
});

const edit = asyncWrapper(async (req, res) => {
  const { id: docID } = req.params;
  const doc = await Agents.findOneAndUpdate({ _id: docID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: false,
  });

  if (!doc) {
    return res.status(404).json({ msg: `No question with id: ${docID}` });
  }
  res.status(200).json({ docID });
});

module.exports = {
  getAll,
  create,
  getSingle,
  update,
  deleteAgent,
  edit,
};

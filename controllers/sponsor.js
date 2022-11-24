const Sponsors = require("../models/sponsor");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getAll = asyncWrapper(async (req, res, next) => {
  const page = req.query.page || 0;
  const sponsorsPerPage = 40;
  const skip = page * sponsorsPerPage;
  const dataList = await Sponsors.find();

  const data = await Sponsors.find()
    .sort("registrationDate")
    .skip(skip)
    .limit(sponsorsPerPage);
  res
    .status(201)
    .json({ length: data.length, totalCount: dataList.length, data });
});

const create = asyncWrapper(async (req, res) => {
  const data = await Sponsors.create(req.body);
  res.status(201).json({ data });
});

const getSingle = asyncWrapper(async (req, res, next) => {
  const { id: ref } = req.params;
  const doc = await Sponsors.findOne({ transactionRef: ref });

  if (!doc) {
    return next(
      createCustomError(`No sponsor with the transaction ref ${ref}`, 404)
    );
  } else {
    return res.status(201).json({ doc });
  }
});

const deleteSponsor = asyncWrapper(async (req, res, next) => {
  const { id: docID } = req.params;
  const doc = await Sponsors.findOneAndDelete({ _id: docID });

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
  const doc = await Sponsors.findOneAndUpdate({ _id: docID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(
      createCustomError(`No article found with the id: ${docID}`, 404)
    );
  }
  res.status(200).json({ doc });
});

const edit = asyncWrapper(async (req, res) => {
  const { id: docID } = req.params;
  const doc = await Sponsors.findOneAndUpdate({ _id: docID }, req.body, {
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
  deleteSponsor,
  edit,
};

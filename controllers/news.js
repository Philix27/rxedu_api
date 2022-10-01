const News = require("../models/news");
// const sendQuestions = require('../db/firebase_config')
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllNews = asyncWrapper(async (req, res, next) => {
  const queryObject = {};
  const { category } = req.query;
  if (category) {
    queryObject.category = category;
  }
  console.log(queryObject.category);
  const data = await News.find(queryObject).sort("date");
  res.status(201).json({ data, length: data.length });
});

const createNews = asyncWrapper(async (req, res) => {
  const news = await News.create(req.body);
  res.status(201).json(req.body);
});

const getSingleNews = asyncWrapper(async (req, res) => {
  const { id: newsID } = req.params;
  const news = await News.findOne({ _id: newsID });

  if (!news) {
    return res.status(404).json(`No news with id: ${id}`);
  } else {
    return res.status(201).json({ news });
  }
});

const deleteNews = asyncWrapper(async (req, res) => {
  const { id: newsID } = req.params;
  const mcq = await News.findOneAndDelete({ _id: newsID });

  if (!mcq) {
    return res.status(404).json(`No mcq with id: ${id}`);
  } else {
    return res.status(201).json({ mcq });
  }
});

const updateNews = asyncWrapper(async (req, res) => {
  const { id: newsID } = req.params;
  const mcq = await McqPep.findOneAndUpdate({ _id: newsID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!mcq) {
    return res.status(404).json({ msg: `No question with id: ${newsID}` });
  }
  res.status(200).json({ newsID });
});

const editNews = asyncWrapper(async (req, res) => {
  const { id: newsID } = req.params;
  const mcq = await McqPep.findOneAndUpdate({ _id: newsID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: false,
  });

  if (!mcq) {
    return res.status(404).json({ msg: `No question with id: ${newsID}` });
  }
  res.status(200).json({ newsID });
});

module.exports = {
  getAllNews,
  createNews,
  getSingleNews,
  updateNews,
  deleteNews,
  editNews,
};

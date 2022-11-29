const Agents = require("../models/agent");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAll = asyncWrapper(async (req, res, next) => {
  const data = await Agents.find();
  res.status(201).json({ length: data.length, data });
});

module.exports = {
  getAll,
};

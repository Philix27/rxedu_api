const Agents = require("../models/agent");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getAll = asyncWrapper(async (req, res, next) => {
  const { nin: nin } = req.query;
  const data = await Agents.find({ nin: nin });
  // data.$where(this.state === state);
  res.status(201).json({ length: data.length, data });
});

module.exports = {
  getAll,
};

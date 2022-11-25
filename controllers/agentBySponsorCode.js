const Agents = require("../models/agent");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getAll = asyncWrapper(async (req, res, next) => {
  const { sponsorCode: sponsorCode } = req.query;
  const data = await Agents.find({ sponsorCode: sponsorCode });
  // data.$where(this.state === state);
  res.status(201).json({ length: data.length, data });
});

module.exports = {
  getAll,
};

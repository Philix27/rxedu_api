const Sponsors = require("../models/sponsor");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getAll = asyncWrapper(async (req, res, next) => {
  const { refcode: refcode } = req.query;
  const data = await Sponsors.find({ refcode: refcode });
  // data.$where(this.state === state);
  res.status(201).json({ length: data.length, data });
});

module.exports = {
  getAll,
};

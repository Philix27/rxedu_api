const mongoose = require("mongoose");

const BrandDrugsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  note: {
    type: String,
    trim: true,
    // required: true,
  },
  dosageForm: {
    type: String,
    trim: true,
    required: true,
  },
  company: {
    type: String,
    trim: true,
    // required: true,
  },
  generic: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
    // required: true,
  },
  genericID: {
    type: String,
    trim: true,
  },
  country: {
    type: [String],
    trim: true,
  },
});

module.exports = mongoose.model("brandDrug", BrandDrugsSchema);

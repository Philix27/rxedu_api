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
    required: true,
  },
  dosageForm: {
    type: String,
    trim: true,
    required: true,
  },
  company: {
    type: String,
    trim: true,
    required: true,
  },
  dose: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("brandDrug", BrandDrugsSchema);

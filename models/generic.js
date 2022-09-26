const mongoose = require("mongoose");

const GenericDrugsSchema = new mongoose.Schema({
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
  drugClass: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("genericDrug", GenericDrugsSchema);

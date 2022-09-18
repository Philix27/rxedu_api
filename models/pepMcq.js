const mongoose = require("mongoose");

const PepMcqSchema = new mongoose.Schema({
  category: {
    type: String,
    trim: true,
    default: "",
    // required: true,
  },
  title: {
    type: String,
    trim: true,
    default: "",
    required: true,
  },
  content: {
    type: String,
    required: true,
    default: "",
  },
  imageUrl: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("pepMcq", PepMcqSchema);

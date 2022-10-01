const mongoose = require("mongoose");

const MCQSchema = new mongoose.Schema({
  category: {
    type: String,
    trim: true,
    // required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  timePosted: {
    type: Date,
    trim: true,
  },
  tags: {
    type: [String],
  },
});

module.exports = mongoose.model("news", MCQSchema);

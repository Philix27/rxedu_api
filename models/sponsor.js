const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  //! First Set
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lga: {
    type: String,
  },
  registrationDate: {
    type: Date,
    // required: true,
  },
  //! Important Params
  unit: {
    type: Number,
  },
  refcode: {
    type: String,
  },
});

module.exports = mongoose.model("sponsor", SponsorSchema);

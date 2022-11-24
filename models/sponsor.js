const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  //! First Set
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  registrationDate: {
    type: Date,
    // required: true,
  },
  //! Important Params
  unit: {
    type: Number,
  },
  transactionRef: {
    type: String,
  },
});

module.exports = mongoose.model("sponsor", SponsorSchema);

const mongoose = require("mongoose");

const MembersSchema = new mongoose.Schema({
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
  alternatePhone: {
    type: String,
    required: true,
  },
  address: {
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
  ward: {
    type: String,
    required: true,
  },
  //! Second Set
  votersRegNo: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  //! Step 3
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("member", MembersSchema);

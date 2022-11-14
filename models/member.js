const mongoose = require("mongoose");

const MembersSchema = new mongoose.Schema({
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
  nin: {
    type: String,
    required: true,
    unique: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  //! Others
  isApproved: {
    type: Boolean,
    default: false,
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
  //! Step 3
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("member", MembersSchema);

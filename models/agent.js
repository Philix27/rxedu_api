const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
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
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
    // required: true,
  },
  //! Second Set
  electionType: {
    type: String,
    required: true,
  },
  //! Step 3
  agentType: {
    type: String,
    required: true,
  },
  pollingUnit: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  nin: {
    type: String,
    // required: true,
  },
  status: {
    type: String,
  },
  //! Others
  isApproved: {
    type: Boolean,
    default: false,
    // required: true,
  },
  registrationDate: {
    type: Date,
    // required: true,
  },
  transactionRef: {
    type: String,
    // required: true,
  },
  sponsorID: {
    type: String,
    // required: true,
  },
  isAgent: {
    type: Boolean,
    default: false,
  },
  sponsored: {
    type: Boolean,
  },
  sponsorCode: {
    type: String,

    // required: true,
  },
});

module.exports = mongoose.model("agent", AgentSchema);

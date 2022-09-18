const mongoose = require('mongoose');

const InternshipCentersSchema = new mongoose.Schema({
    state: {
        type: String,
        trim: true,
        required: true,
    },
    venue: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        required: true,
        trim: true,
    },
    instituteType: {
        type: String,
        required: true,
        trim: true,
    },
  
});

module.exports = mongoose.model('InternshipCenters', InternshipCentersSchema);

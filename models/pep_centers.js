const mongoose = require('mongoose');

const PepCentersSchema = new mongoose.Schema({
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
  
});

module.exports = mongoose.model('PepCenters', PepCentersSchema);

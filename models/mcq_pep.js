const mongoose = require('mongoose');

const MCQPepSchema = new mongoose.Schema({
    category: {
        type: String,
        trim: true,
        required: true,
    },
    question: {
        type: String,
        trim: true,
        required: true,
    },
    explain: {
        type: String,
        trim: true,
    },
    answerIndex: {
        type: Number,
        required: true,
        trim: true,
    },
    options: {
        type: [String],
        required: true
    },
});

module.exports = mongoose.model('mcq_pep', MCQPepSchema);      

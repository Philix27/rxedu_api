const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    category: {
        type: String,
        trim: true,
        required: true,
    },
    subcategory: {
        type: String,
        trim: true,
        default: "",
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: [],
        required: true
    },
    imageUrl: {
        type: String,
        trim: true,
    },
    videoUrl: {
        type: String,
        trim: true,
        default: "",
    },
    mcqUrl: {
        type: String,
        default: "",
    },
    keywords: {
        type: [String],
         default: [],
    },
    flashcards: {
        type: [String],
        default: [],
    },
});

module.exports = mongoose.model('ArticleSchema', ArticleSchema);

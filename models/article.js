const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    subcategory: {
        type: String,
        trim: true,
        default: "",
    },
    category: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    title: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    content: {
        type: String,
        required: true,
        default: "",
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
    mcqCategory: {
        type: String,
        default: "",
    },
    keywords: {
        type: [String],
         default: [],
    },
    relatedArticlesID: {
        type: [String],
         default: [],
    },
    flashcards: {
        type: [String],
        default: [],
    },
});

module.exports = mongoose.model('article', ArticleSchema);

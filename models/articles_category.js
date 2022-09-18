const mongoose = require('mongoose');

const ArticlesCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
department: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    imageUrl: {
        type: String,
        trim: true,
         default: "",
        required: true,
    },
   
});

module.exports = mongoose.model('articles_category', ArticlesCategorySchema);

const mongoose = require('mongoose')

const connectDB = (url) =>
    mongoose.connect(url, { useNewUrlParser: true });

module.exports = connectDB

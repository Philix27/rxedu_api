const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uid: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    email: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    accessToken: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
 
});

module.exports = mongoose.model('user', UserSchema);

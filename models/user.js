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
    userName: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    dateJoined: {
        type: String,
        required: true,
        // required: true,
    },
    accessToken: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
 
});

module.exports = mongoose.model('user', UserSchema);

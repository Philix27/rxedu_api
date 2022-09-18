const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
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
    durationOfSubscription: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    amount: {
        type: Number,
        default: 0,
        required: true,
    },
    timeOfTransaction: {
        type: Date,
        required: true,
        default: Date.now,
    },
    freeTrialExpiryDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    lastSubscriptionDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    lastSubscriptionExpiriryDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
   
 
});

module.exports = mongoose.model('subscriptionSchema', SubscriptionSchema);

const mongoose = require('../data');

var authSchema = new mongoose.Schema({
    token: String,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true });

var Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
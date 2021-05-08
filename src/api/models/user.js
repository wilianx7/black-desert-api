const mongoose = require('../data');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        indexes: { unique: true },
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

var User = mongoose.model('User', userSchema);

module.exports = User;
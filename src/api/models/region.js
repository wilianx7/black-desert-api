const mongoose = require('../data');

var regionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

var Region = mongoose.model('Region', regionSchema);

module.exports = Region;
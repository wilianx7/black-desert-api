const mongoose = require('../data');

var itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    attackPower: {
        type: Number,
        default: 0
    },
    defensePower: {
        type: Number,
        default: 0
    },
    precision: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        required: true,
    },
}, { timestamps: true });

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
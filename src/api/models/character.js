const mongoose = require('../data');

var characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    primaryWeapon: {
        type: String,
        required: true,
    },
    secondaryWeapon: {
        type: String,
        required: true,
    },
    awakeningWeapon: {
        type: String,
        required: true,
    },

    originRegion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Region',
        required: true,
    },

    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
}, { timestamps: true });

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;
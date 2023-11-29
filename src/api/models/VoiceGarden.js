const mongoose = require('mongoose');

const voiceGardenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    clipTitle: {
        type: String,
        required: true
    },
    clipPath: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('VoiceGarden', voiceGardenSchema);
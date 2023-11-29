const mongoose = require('mongoose');

const magicTileSchema = new mongoose.Schema({
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
      title: {
            type: String,
            required: true
      },
      image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VisualGallery',
            required: true
      },
      sound: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VoiceGarden',
            required: true
      },
},
      {
            timestamps: true
      }
);

module.exports = mongoose.model('MagicTile', magicTileSchema);
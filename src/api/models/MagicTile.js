const mongoose = require('mongoose');

const magicTileSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true
      },
      image: {
            type: String,
            required: true
      }, // URL to the image
      sound: {
            type: String,
            required: true
      }, // URL to the sound clip
      createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
},
      {
            timestamps: true
      }
);

module.exports = mongoose.model('MagicTile', magicTileSchema);

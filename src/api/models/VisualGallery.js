const mongoose = require('mongoose');

const visualGallerySchema = new mongoose.Schema({
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
      imageName: {
            type: String,
            required: true
      },
      imagePath: {
            type: String,
            required: true
      },
},
      {
            timestamps: true
      }
);

module.exports = mongoose.model('VisualGallery', visualGallerySchema);

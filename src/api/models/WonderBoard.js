const mongoose = require('mongoose');

const wonderBoardSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      tiles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MagicTile'
      }],
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

module.exports = mongoose.model('WonderBoard', wonderBoardSchema);

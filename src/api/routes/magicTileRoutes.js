const express = require('express');
const router = express.Router();
const magicTilesController = require('../controllers/magicTilesController');

router.route('/')
      .get(magicTilesController.getAllTiles)
      .post(magicTilesController.createTile);

router.route('/:tileId')
      .get(magicTilesController.getTile)
      .patch(magicTilesController.updateTile)
      .delete(magicTilesController.deleteTile);

module.exports = router;

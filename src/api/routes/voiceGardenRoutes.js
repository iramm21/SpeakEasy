const express = require('express');
const router = express.Router();
const voiceGardenController = require('../controllers/voiceGardenController');

router.route('/')
      .get(voiceGardenController.getAllClips)
      .post(voiceGardenController.addNewClip);

router.route('/:clipId')
      .get(voiceGardenController.getClip)
      .patch(voiceGardenController.updateClip)
      .delete(voiceGardenController.deleteClip);

module.exports = router;

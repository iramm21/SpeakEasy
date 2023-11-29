const express = require('express');
const router = express.Router();
const visualGalleryController = require('../controllers/visualGalleryController');

router.route('/')
      .get(visualGalleryController.getAllImages)
      .post(visualGalleryController.addNewImage);

router.route('/:imageId')
      .get(visualGalleryController.getImage)
      .patch(visualGalleryController.updateImage)
      .delete(visualGalleryController.deleteImage);

module.exports = router;

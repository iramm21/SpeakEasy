// users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.route('/')
      .get(usersController.getAllUsers)
      .post(usersController.createNewUser);

router.route('/:userId')
      .get(usersController.getUser)
      .patch(usersController.updateUser)
      .delete(usersController.deleteUser);

module.exports = router;

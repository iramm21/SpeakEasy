// users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController'); // Adjust the path as necessary

// Route for handling all users and creating a new user
router.route('/')
      .get(usersController.getAllUsers)
      .post(usersController.createNewUser);

// Route for handling individual user operations
router.route('/:userId')
      .get(usersController.getUser)
      .patch(usersController.updateUser)
      .delete(usersController.deleteUser);

module.exports = router;

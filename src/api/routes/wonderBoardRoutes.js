const express = require('express');
const router = express.Router();
const wonderBoardsController = require('../controllers/wonderBoardsController'); // Adjust the path as necessary

router.route('/')
      .get(wonderBoardsController.getAllBoards)
      .post(wonderBoardsController.createBoard);

router.route('/:boardId')
      .get(wonderBoardsController.getBoard)
      .patch(wonderBoardsController.updateBoard)
      .delete(wonderBoardsController.deleteBoard);

module.exports = router;

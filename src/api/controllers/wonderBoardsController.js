const WonderBoard = require('../models/WonderBoard');

// wonderBoardsController.js
const getAllBoards = async (req, res) => {
    // Logic to retrieve all WonderBoards
    try {
        const boards = await WonderBoard.find();
        res.status(200).json({ boards });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBoard = async (req, res) => {
    // Logic to create a new WonderBoard
    try {
        const newBoard = new WonderBoard(req.body);
        await newBoard.save();
        res.status(201).json({ board: newBoard });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBoard = async (req, res) => {
    // Logic to get a single WonderBoard by ID
    try {
        const board = await WonderBoard.findById(req.params.boardId);
        if (!board) {
            return res.status(404).json({ message: 'Board not found' });
        }
        res.status(200).json({ board });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBoard = async (req, res) => {
    // Logic to update a WonderBoard by ID
    try {
        const updatedBoard = await WonderBoard.findByIdAndUpdate(req.params.boardId, req.body, { new: true });
        if (!updatedBoard) {
            return res.status(404).json({ message: 'Board not found' });
        }
        res.status(200).json({ board: updatedBoard });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBoard = async (req, res) => {
    // Logic to delete a WonderBoard by ID
    try {
        const board = await WonderBoard.findByIdAndDelete(req.params.boardId);
        if (!board) {
            return res.status(404).json({ message: 'Board not found' });
        }
        res.status(200).json({ message: 'Board deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBoards,
    createBoard,
    getBoard,
    updateBoard,
    deleteBoard
};

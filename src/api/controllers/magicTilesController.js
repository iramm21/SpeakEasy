const MagicTile = require('../models/MagicTile');

const getAllTiles = async (req, res) => {
    // Logic to retrieve all MagicTiles
    try {
        const tiles = await MagicTile.find({});
        res.status(200).json(tiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTile = async (req, res) => {
    // Logic to create a new MagicTile
    try {
        const newTile = new MagicTile(req.body);
        await newTile.save();
        res.status(201).json(newTile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTile = async (req, res) => {
    // Logic to get a single MagicTile by ID
    try {
        const tile = await MagicTile.findById(req.params.tileId);
        if (!tile) {
            return res.status(404).json({ message: 'MagicTile not found' });
        }
        res.status(200).json(tile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTile = async (req, res) => {
    // Logic to update a MagicTile by ID
    try {
        const updatedTile = await MagicTile.findByIdAndUpdate(req.params.tileId, req.body, { new: true });
        if (!updatedTile) {
            return res.status(404).json({ message: 'MagicTile not found' });
        }
        res.status(200).json(updatedTile);
    } catch (error) {

    }
};

const deleteTile = async (req, res) => {
    // Logic to delete a MagicTile by ID
    try {
        const tile = await MagicTile.findByIdAndDelete(req.params.tileId);
        if (!tile) {
            return res.status(404).json({ message: 'MagicTile not found' });
        }
        res.status(200).json({ message: 'MagicTile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTiles,
    createTile,
    getTile,
    updateTile,
    deleteTile
};

const VisualGallery = require('../models/VisualGallery');

const getAllImages = async (req, res) => {
    try {
        const images = await VisualGallery.find({});
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addNewImage = async (req, res) => {
    try {
        const newImage = new VisualGallery(req.body);
        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getImage = async (req, res) => {
    try {
        const image = await VisualGallery.findById(req.params.imageId);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(image);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateImage = async (req, res) => {
    try {
        const updatedImage = await VisualGallery.findByIdAndUpdate(req.params.imageId, req.body, { new: true });
        if (!updatedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(updatedImage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteImage = async (req, res) => {
    try {
        const image = await VisualGallery.findByIdAndDelete(req.params.imageId);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllImages,
    addNewImage,
    getImage,
    updateImage,
    deleteImage
};

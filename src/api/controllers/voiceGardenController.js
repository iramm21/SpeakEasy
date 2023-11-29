const VoiceGarden = require('../models/VoiceGarden');

const getAllClips = async (req, res) => {
    try {
        const clips = await VoiceGarden.find({});
        res.status(200).json(clips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addNewClip = async (req, res) => {
    try {
        const newClip = new VoiceGarden(req.body);
        await newClip.save();
        res.status(201).json(newClip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getClip = async (req, res) => {
    try {
        const clip = await VoiceGarden.findById(req.params.clipId);
        if (!clip) {
            return res.status(404).json({ message: 'Clip not found' });
        }
        res.status(200).json(clip);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateClip = async (req, res) => {
    try {
        const updatedClip = await VoiceGarden.findByIdAndUpdate(req.params.clipId, req.body, { new: true });
        if (!updatedClip) {
            return res.status(404).json({ message: 'Clip not found' });
        }
        res.status(200).json(updatedClip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteClip = async (req, res) => {
    try {
        const clip = await VoiceGarden.findByIdAndDelete(req.params.clipId);
        if (!clip) {
            return res.status(404).json({ message: 'Clip not found' });
        }
        res.status(200).json({ message: 'Clip deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllClips,
    addNewClip,
    getClip,
    updateClip,
    deleteClip
};

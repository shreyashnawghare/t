// routes/participants.js
const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');

// Create a participant
router.post('/', async (req, res) => {
  try {
    const participant = await Participant.create(req.body);
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all participants
router.get('/', async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific participant
router.get('/:id', async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (participant) {
      res.json(participant);
    } else {
      res.status(404).json({ message: 'Participant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a participant
router.put('/:id', async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a participant
router.delete('/:id', async (req, res) => {
  try {
    await Participant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Participant deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

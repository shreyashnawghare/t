// routes/tournaments.js
const express = require('express');
const router = express.Router();
const Tournament = require('../models/tournament');

// Create a tournament
router.post('/', async (req, res) => {
  try {
    const tournament = await Tournament.create(req.body);
    res.status(201).json(tournament);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all tournaments
router.get('/', async (req, res) => {
  try {
    const tournaments = await Tournament.find().populate('participants');
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific tournament
router.get('/:id', async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id).populate('participants');
    if (tournament) {
      res.json(tournament);
    } else {
      res.status(404).json({ message: 'Tournament not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a tournament
router.put('/:id', async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tournament);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a tournament
router.delete('/:id', async (req, res) => {
  try {
    await Tournament.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tournament deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

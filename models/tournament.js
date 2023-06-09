// models/tournament.js
const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Participant',
    },
  ],
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },
});

module.exports = mongoose.model('Tournament', tournamentSchema);

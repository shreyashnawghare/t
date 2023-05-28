// models/participant.js
const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add any other properties you need for participants
});

module.exports = mongoose.model('Participant', participantSchema);

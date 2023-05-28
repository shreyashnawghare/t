// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000; // Or any other port you prefer

// Connect to MongoDB
mongoose.connect('mongodb://localhost/tournamentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
const tournamentRoutes = require('./routes/tournaments');
const participantRoutes = require('./routes/participants');
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/participants', participantRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');

const gamesRouter = require('./routes/games');
const app = express();
const PORT = 1984;

// connecting to local mongoDB database
mongoose.connect('mongodb://localhost/games');

// GET request for the root
app.get('/', gamesRouter);

// starts the server on the specific port
app.listen(PORT, () => {
  console.log(`Server listening on port 1984`)
});
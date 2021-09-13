const express = require('express');
const app = express();
const PORT = 1984;
const gamesRouter = require('./routes/games');

// GET request for the root
app.get('/', gamesRouter);

// starts the server on the specific port
app.listen(PORT, () => {
  console.log(`Server listening on port 1984`)
});
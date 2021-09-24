const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const gamesRouter = require('./routes/games');
const app = express();
const PORT = 1984;

// connecting to local mongoDB database
mongoose.connect('mongodb://localhost/games');

// setting the view engine
app.set('view engine', 'ejs');

// telling express how to access the fields in the _form_fields view
// used to create and edit articles
app.use(express.urlencoded({ 
  extended: false
}));

// allows to use other methods with forms other than GET and POST
app.use(methodOverride('_method'));

// GET request for /games endpoint
app.use('/games', gamesRouter);

// starts the server on the specific port
app.listen(PORT, () => {
  console.log(`Server listening on port 1984`)
});
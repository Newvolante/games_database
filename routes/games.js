const express = require('express');
const Game = require('./../model/game_model');
const router = express.Router();

// GET request for the root page
router.get('/', (req, res) => {
  console.log('requesting root page');
  res.send('<h1>Root Page</h1>');
});

// GET request for the "new game" page
router.get('/new', (req, res) => {
  console.log('Requesting new page');
  // res.send('<h1>test</h1>');
  res.render('games/new');
});

// POST request to save the game in the database
router.post('/articles', (req, res) => {
  console.log('In post request');
    // creating a new article
    let newGame = new Game({
      title: req.body.name,
      shop: req.body.shop
    });

    //saving entry in the database
    newGame.save();

    // redirecting to root page
    res.redirect('/');
});

module.exports = router;
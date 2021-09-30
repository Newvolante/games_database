const { application } = require('express');
const express = require('express');
const Game = require('./../model/game_model');
const router = express.Router();

// GET request for the root page
router.get('/', (req, res) => {
  console.log('requesting root page');
  res.send('<h1>/Games Page</h1>');
});

// GET request dor games/edit/:id
router.get('/edit/:id', async (req, res) => {
  let game = await Game.findById(req.params.id);

  // res.send('<div>Game edit route</div>');
  res.render('games/edit', {
    game: game
  });
});

// GET request for the "new game" page
router.get('/new', (req, res) => {
  console.log('Requesting new page');
  // res.send('<h1>test</h1>');
  res.render('games/new');
});

// POST request to save the game in the database
router.post('/', (req, res) => {
  console.log('In post request');
    // creating a new article
    let newGame = new Game({
      name: req.body.name,
      genre: req.body.genre,
      shop: req.body.shop
    });

    //saving entry in the database
    newGame.save();

    // redirecting to root page
    res.redirect('/');
});

// PUT (edit) route
router.put('/:id', async (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
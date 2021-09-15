const express = require('express');
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

module.exports = router;
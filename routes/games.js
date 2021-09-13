const express = require('express');
const router = express.Router();

// GET request for the root page
router.get('/', (req, res) => {
  console.log('requesting root page');
  res.send('<h1>Root Page</h1>');
})

module.exports = router;
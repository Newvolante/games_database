const express = require('express');
const app = express();
const PORT = 1984;

// starts the server on the specific port
app.listen(PORT, () => {
  console.log(`Server listening on port 1984`)
});
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

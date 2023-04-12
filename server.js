const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/js-api-loader', express.static(path.join(__dirname, 'node_modules', '@googlemaps', 'js-api-loader')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/secrets.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/secrets.js'))
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

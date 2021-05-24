const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/create', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/create.html'));
  });

app.use(express.static('public'));

app.listen(port);
console.log('Server started at http://localhost:' + port);
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/styles/styles.css');
});

app.get('/bundle.js', function (req, res) {
  res.sendFile(__dirname + '/dist/bundle.js');
});

var port = 3000;
app.listen(port, function() {
  console.log('MVP listening on port 3000');
});

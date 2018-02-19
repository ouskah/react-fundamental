const express = require('express');
const app = express();

app.listen(3000, function(req, res) {
  console.log('Express App is listening on port 3000');
});

app.get('/', function(req, res) {
  res.send('Hello World');
});

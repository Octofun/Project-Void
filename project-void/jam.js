const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '')));

app.get('/*', function (req, res) {
  console.log('available on localhost:9000');
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.listen( process.env.PORT || 9000);
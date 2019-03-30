const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// __dirname is the current directory of the script
app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(path.join(__dirname, 'build')));

// Example of non-standard routing
app.get('/ping', function (req, res) {
 return res.send('pong');
});

// For any other path, send them to the index
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

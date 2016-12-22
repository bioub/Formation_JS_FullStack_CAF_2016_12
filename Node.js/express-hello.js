const express = require('express');

const server = express();

server.use(function(req, res, next) {
  res.setHeader('Content-type', 'text/plain');
  next();
});

server.get('/', function(req, res) {
  res.send('Home');
});

server.get('/contact', function(req, res) {
  res.send('Contact');
});


server.listen(8080, function() {
  console.log('Serveur démarré ! ');
});

const http = require('http');

const server = http.createServer(function(req, res) {
  res.setHeader('Content-type', 'text/plain');
  res.statusCode = 200;
  
  switch (req.url) {
    case '/':
      res.write('Home');
      break;
    case '/contact':
      res.write('Contact');
      break;
    default:
      res.statusCode = 404;
      res.write('Not Found');
  }


  res.end();
});

server.listen(8080, function() {
  console.log('Serveur démarré ! ');
});


/*
<?php
echo 'Hello;
 */
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
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
}
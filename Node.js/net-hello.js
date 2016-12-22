const net = require('net');

const server = net.createServer(function(socket) {
  console.log('Client connected');
  socket.write('Hello');
  socket.on('data', function(data) {
    console.log(data.toString());
  });
});

server.listen(1234, function() {
  console.log('Serveur démarré ! ');
});
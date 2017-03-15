var WebSocketServer = require('websocket').server;
var http = require('http');

var connections = [];

var server = http.createServer(function(request: any, response: any) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(8080, function() {
  console.log((new Date()) + ' Server is listening on port 8080');
});

var wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false
});

function originIsAllowed(origin: any) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request: any) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    return;
  }
  if (request.requestedProtocols.indexOf('echo-protocol') === -1) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log((new Date()) + ' Connection rejected wrong protocol: ' + request.requestedProtocols);
    return;
  }

  var connection = request.accept('echo-protocol', request.origin);
  console.log((new Date()) + ' Connection accepted.');
  connection.on('message', function(message: any) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    }
    else if (message.type === 'binary') {
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
      connection.sendBytes(message.binaryData);
    }
  });
  connection.on('close', function(reasonCode: any, description: any) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});

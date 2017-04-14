"use strict";
(async () => {
const User = require("./entity/User");
const WebSocketServer = require("websocket").server;
const http = require("http");
const uuidV4 = require('uuid/v4');
const serverInformationEmitter = require("./util/serverInformationEmitter");


var users= {};
var userCounter = 0;

var server = http.createServer(function(request , response) {
  console.log((new Date()) + " Received request for " + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(6283, function() {
  console.log((new Date()) + ' Server is listening on port 6283');
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

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
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

  var userIndex = uuidV4();
  users[userIndex] = new User(connection, userIndex);
  userCounter++;

  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    delete users[userIndex];
  });
});





})();

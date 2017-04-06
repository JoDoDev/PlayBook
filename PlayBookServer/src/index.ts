import {WebsocketRequest, WebsocketConnection, WebsocketMessage} from "./types/Websocket";
import {User} from "./types/User";
var WebSocketServer = <any>(require("websocket").server);
import * as http from "http";

var users: User[] = [];
var userCounter: number = 0;

var server = http.createServer(function(request: any, response: any) {
  console.log((new Date()) + " Received request for " + request.url);
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

function originIsAllowed(origin: string) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request: WebsocketRequest) {
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
  var connection: WebsocketConnection = request.accept('echo-protocol', request.origin);
  console.log((new Date()) + ' Connection accepted.');

  var userIndex: number = userCounter++;
  users[userCounter] = new User(connection, userIndex);


  connection.on('close', function(reasonCode: string, description: string) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});

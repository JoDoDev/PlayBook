"use strict";
const EventEmitter = require('events');
process.stdin.resume();//so the program will not close instantly

let ServerInformationEmitter = class ServerInformationEmitter extends EventEmitter {
};
let serverInformationEmitter = new ServerInformationEmitter();


//do something when app is closing
process.on('exit', () => {
  serverInformationEmitter.emit("CLOSE", {
    type: "CLOSE"
  });
  process.exit();
});

//catches ctrl+c event
process.on('SIGINT', () => {
  serverInformationEmitter.emit("CLOSE", {
    type: "CLOSE"
  });
  process.exit();
});

//catches uncaught exceptions
process.on('uncaughtException', () => {
  serverInformationEmitter.emit("CLOSE", {
    type: "CLOSE"
  });
  process.exit();
});

module.exports = serverInformationEmitter;

"use strict";
const EventEmitter = require('events');

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
process.on('uncaughtException', (err) => {
  serverInformationEmitter.emit("CLOSE", {
    type: "CLOSE"
  });
  console.error(err);
  process.exit();
});

module.exports = serverInformationEmitter;

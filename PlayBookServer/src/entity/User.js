"use strict";
const AuthenticationHandler = require('../handlers/AuthenticationHandler/AuthenticationHandler');
const MessageEmitter = require('../util/MessageEmitter')
const EventEmitter = require('events');

module.exports = class User {
  constructor(connection, userIndex) {
    this.connection = connection;
    this.userIndex = userIndex;
    this.sessionKey;
    this.username;
    this.email;
    this.admin;

    this.messageEmitter = new EventEmitter();

    this.authenticationhandler = new AuthenticationHandler(this);

    connection.on('message', (message) => {
      if (message.type === 'utf8') {
        let data = JSON.parse(message.utf8Data);
        if (data.hasOwnProperty('type')) {
          this.messageEmitter.emit(data.type, data);
        }
      }
    });
  }


  sendUTF(data) {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    this.connection.sendUTF(data);
  }
};

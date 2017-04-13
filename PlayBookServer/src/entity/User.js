"use strict";
const AuthenticationHandler = require('../handlers/AuthenticationHandler/AuthenticationHandler');
const MessageEmitter = require('../util/MessageEmitter')

module.exports = class User {
  constructor(connection, userIndex) {
    this.connection = connection;
    this.userIndex = userIndex;
    this.sessionKey;
    this.username;
    this.email;
    this.admin;

    this.messageEmitter = new MessageEmitter();

    this.authenticationhandler = new AuthenticationHandler(this);

    connection.on('message', function (message) {
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
      data = JSON.parse(data);
    }
    this.connection.sendUTF(data.utf8Data);
  }
};

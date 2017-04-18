"use strict";
const AuthenticationHandler = require('../handlers/AuthenticationHandler/AuthenticationHandler');
const MessageEmitter = require('../util/MessageEmitter');

module.exports = class User {
  constructor(connection, userservice, userIndex) {
    this.connection = connection;
    this.userIndex = userIndex;
    this.userservice = userservice;
    this.setInitialData();
    this.messageEmitter = new MessageEmitter();

    this.authenticationhandler = new AuthenticationHandler(this);

    connection.on('message', (message) => {
      if (message.type === 'utf8') {
        try {
          let data = JSON.parse(message.utf8Data);
          if (data.hasOwnProperty('type')) {
            console.log("user received : " + data.type, data);
            this.messageEmitter.emit(data.type, data);
          }
        } catch (e) {
          if (e instanceof SyntaxError) {
            this.sendUTF({
              "type": "JSON_SYNTAX_ERROR",
              "data": {},
              "cause": "Could not Transform data into Object"
            });
          } else {
            console.log(e);
          }
        }
      }
    });


    connection.on('close', () => {
      this.messageEmitter.removeAllListeners();
      this.userservice.deleteUser(this.userIndex);
    });
  }


  sendUTF(data) {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    this.connection.sendUTF(data);
  }

  setInitialData() {
    this.sessionKey = "";
    this.username = "";
    this.email = "";
    this.admin = 0;
    this.userId = -1;
    this.loggedIn = false;
  }
};

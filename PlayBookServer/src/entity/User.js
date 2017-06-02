"use strict";
const AuthenticationHandler = require('../handlers/AuthenticationHandler/AuthenticationHandler');
const GameHandler = require('../handlers/GameHandler/GameHandler');
const MessageEmitter = require('../util/MessageEmitter');

module.exports = class User {
  constructor(connection, userService, userIndex) {
    this.connection = connection;
    this.userIndex = userIndex;
    this.userservice = userService;
    this.setInitialData();
    this.messageEmitter = new MessageEmitter();

    this.authenticationhandler = new AuthenticationHandler(this);
    this.GameHandler = new GameHandler(this);

    connection.on('message', (message) => {
      if (message.type === 'utf8') {
        try {
          let data = JSON.parse(message.utf8Data);
          if (data.hasOwnProperty('type')) {
            console.log("To Server : " + data.type, data);
            this.messageEmitter.emit(data.type, data);
          }
        } catch (e) {
          if (e instanceof SyntaxError) {
            console.error(message.utf8Data);
            this.sendUTF({
              "type": "JSON_SYNTAX_ERROR",
              "data": {},
              "cause": "Could not Transform data into Object"
            });
          } else {
            console.error(e);
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

    let dataTemp;
    if (typeof data === 'string') {
      dataTemp = JSON.parse(data);
    }
    console.log("To Client : " + dataTemp.type, dataTemp);
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

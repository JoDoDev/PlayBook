"use strict";
const uuidV4 = require('uuid/v4');

const databaseHelper = require("../../database/DatabaseHelper/DatabaseHelper");


module.exports = class LoginHandler {
    constructor(user) {
      this.user = user;

      this.user.messageEmitter.on("LOGIN",async (data) => {
        if(LoginHandler.hasProperties(data)) {
          let qResult;
          qResult = await databaseHelper.checkUsernameAndPassword(data.data.username, data.data.password);
          let success = qResult["0"].success;
          let userId = qResult["0"].userId;
          let username = (qResult["0"].username !== null)? qResult["0"].username: "";
          let email = (qResult["0"].email !== null)? qResult["0"].email: "";

          let sessionKey = "";
          if (success === 'true') {
            sessionKey = uuidV4();
            await databaseHelper.setSessionKey(userId, sessionKey);
            user.sessionKey = sessionKey;
            user.username = username;
            user.email = email;
            user.userId = userId;
            user.loggedIn = true;

            this.user.sendUTF(this.getReturnObject(sessionKey, username, email));
          } else {
            this.user.sendUTF(this.getErrorReturnObject(data.data.username, "Username and Password don't match"));
          }
        } else {
          this.user.sendUTF(this.getErrorReturnObject("", "Object does not have the needed properties"));
        }
      });
    }

  static hasProperties(data) {
    // Check if data object has the needed values
    if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {

      if (data.data.hasOwnProperty("username") &&
        data.data.hasOwnProperty("password")) {

        // Check if the username and password are of accepted types
        if (typeof data.data.username === 'string' || typeof data.data.username === 'number' &&
          typeof data.data.password === 'string' || typeof data.data.password === 'number') {

          return true;
        }
      }
    }
    return false;
  }

  getReturnObject(sessionKey, username, email) {
    return {
      type: "LOGIN",
      data: {
        sessionKey: sessionKey,
        username: username,
        email: email
      }
    };
  }

  getErrorReturnObject(username, cause) {
    return {
      type: "LOGIN_ERROR",
      data: {
        username: username
      },
      cause: cause
    };
  }
};

"use strict";
const uuidV4 = require('uuid/v4');

const DatabaseHelper = require("../../database/DatabaseHelper/DatabaseHelper");


module.exports = class SessionLoginHandler {
    constructor(user) {
      this.user = user;

      this.user.messageEmitter.on("SESSION_LOGIN",async (data) => {
        try {
          if (!SessionLoginHandler.hasProperties(data)) {
            this.user.sendUTF(SessionLoginHandler.getErrorReturnObject("", "Object does not have the needed properties"));
          }
          if (this.user.loggedIn === true) {
            this.user.sendUTF(SessionLoginHandler.getErrorReturnObject(data.data.username, "You are already logged in"));
            return;
          }

          let qResult;
          qResult = await DatabaseHelper.isSessionKeyValid(data.data.sessionkey, 3);
          let success = qResult["0"].valid === 'true';
          let userId = (qResult["0"].userId !== null) ? qResult["0"].userId : -1;
          let username = (qResult["0"].username !== null) ? qResult["0"].username : "";
          let email = (qResult["0"].email !== null) ? qResult["0"].email : "";

          let sessionKey = "";
          if (success === true) {
            sessionKey = uuidV4();
            await DatabaseHelper.setSessionKey(userId, sessionKey);
            user.sessionKey = sessionKey;
            user.username = username;
            user.email = email;
            user.userId = userId;
            user.loggedIn = true;

            this.user.sendUTF(SessionLoginHandler.getReturnObject(true, sessionKey, username, email));
          } else {
            this.user.sendUTF(SessionLoginHandler.getReturnObject(false, "", data.data.username, ""));
          }
        } catch (e) {
          console.error("SESSION_LOGIN_ERROR", e);
          this.user.sendUTF(SessionLoginHandler.getErrorReturnObject("", "Unexpected Error occurred"));
        }
      });
    }

  static hasProperties(data) {
    if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {
      if (data.data.hasOwnProperty("sessionkey")) {
        if (typeof data.data.sessionkey === 'string') {
          return true;
        }
      }
    }
    return false;
  }

  static getReturnObject(valid, sessionKey, username, email) {
    return {
      type: "SESSION_LOGIN",
      data: {
        valid: valid,
        sessionkey: sessionKey,
        username: username,
        email: email
      }
    };
  }

  static getErrorReturnObject(sessionkey, cause) {
    return {
      type: "SESSION_LOGIN_ERROR",
      data: {
        sessionkey: sessionkey
      },
      cause: cause
    };
  }
};

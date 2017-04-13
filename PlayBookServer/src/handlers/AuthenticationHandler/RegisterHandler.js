"use strict";
const uuidV4 = require('uuid/v4');
const doesUserExist = require("../../actions/DoesUserExist");
const databaseHelper = require("../../database/DatabaseHelper/DatabaseHelper");

module.exports = class RegisterHandler {
  constructor(user) {
    this.user = user;

    this.user.messageEmitter.on("REGISTER",async (data) => {
      if (RegisterHandler.hasProperties(data)) {
        if(!(await doesUserExist.doesUserExistWithUsernameOrEmail(data.data.username, data.data.email))) {
          let qResult;

          await databaseHelper.createUser(data.data.username, data.data.email, data.data.password);
          qResult = await databaseHelper.getIdOfUser(data.data.username);
          let userId = qResult[0].userId;

          if (typeof userId === 'number') {
            let sessionKey = uuidV4();
            await databaseHelper.setSessionKey(userId, sessionKey);
            user.sessionKey = sessionKey;
            user.username = data.data.username;
            user.email = data.data.email;
            user.userId = userId;
            user.loggedIn = true;


            this.user.sendUTF(this.getReturnObject(sessionKey, data.data.username, data.data.email));
          } else {
            this.user.sendUTF(this.getErrorReturnObject(data.data.username, data.data.email, "Could not save user to Database"));
          }
        } else {
          this.user.sendUTF(this.getErrorReturnObject(data.data.username, data.data.email, "User with this credential already exists"));
        }
      } else {
        this.user.sendUTF(this.getErrorReturnObject("", "", "Object does not have the needed properties"));
      }
    });
  }

  static hasProperties(data) {
    // Check if data object has the needed values
    if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {

      if (data.data.hasOwnProperty("username") &&
        data.data.hasOwnProperty("password") &&
        data.data.hasOwnProperty("email")) {

        // Check if the username and password are of accepted types
        if (typeof data.data.username === 'string' || typeof data.data.username === 'number' &&
          typeof data.data.password === 'string' || typeof data.data.password === 'number' &&
          typeof data.data.email === 'string') {

          return true;
        }
      }
    }
    return false;
  }

  getReturnObject(sessionKey, username, email) {
    return {
      type: "REGISTER",
      data: {
        sessionKey: sessionKey,
        username: username,
        email: email,
      }
    };
  }

  getErrorReturnObject(username, email, cause) {
    return {
      type: "REGISTER_ERROR",
      data: {
        username: username,
        email: email
      },
      cause: cause
    };
  }
};

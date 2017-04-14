"use strict";
const uuidV4 = require('uuid/v4');
const doesUserExist = require("../../actions/DoesUserExist");
const databaseHelper = require("../../database/DatabaseHelper/DatabaseHelper");

module.exports = class RegisterHandler {
  constructor(user) {
    this.user = user;

    this.user.messageEmitter.on("REGISTER",async (data) => {
      if (RegisterHandler.hasProperties(data)) {
        if (this.user.loggedIn === true) {
          this.user.sendUTF(RegisterHandler.getErrorReturnObject(data.data.username,  data.data.email, "You are already logged in"));
          return;
        }
        if(!(await doesUserExist.doesUserExistWithUsernameOrEmail(data.data.username, data.data.email))) {
          if(!RegisterHandler.isUserInputCorrect(data.data.username, data.data.email, data.data.password)) {
            this.user.sendUTF(RegisterHandler.getErrorReturnObject(data.data.username, data.data.email, "User Inputs are Wrong"));
            return;
          }
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


            this.user.sendUTF(RegisterHandler.getReturnObject(sessionKey, data.data.username, data.data.email));
          } else {
            this.user.sendUTF(RegisterHandler.getErrorReturnObject(data.data.username, data.data.email, "Could not save user to Database"));
          }
        } else {
          this.user.sendUTF(RegisterHandler.getErrorReturnObject(data.data.username, data.data.email, "User with this credential already exists"));
        }
      } else {
        this.user.sendUTF(RegisterHandler.getErrorReturnObject("", "", "Object does not have the needed properties"));
      }
    });
  }

  static isUserInputCorrect(username, email, password) {
    if(username.length >= 3 && password.length >= 3) {
      let emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+";
      if(emailRegex.test(email)) {
        return true;
      }
    }
    return false;
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

  static getReturnObject(sessionKey, username, email) {
    return {
      type: "REGISTER",
      data: {
        sessionKey: sessionKey,
        username: username,
        email: email,
      }
    };
  }

  static getErrorReturnObject(username, email, cause) {
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

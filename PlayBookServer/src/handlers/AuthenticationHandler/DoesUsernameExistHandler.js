"use strict";
const DoesUserExist = require("../../actions/DoesUserExist");

module.exports = class DoesUsernameExistHandler {
  constructor(user) {
    this.user = user;

    this.user.messageEmitter.on("DOES_USERNAME_EXIST",async (data) => {
      try {
        if (DoesUsernameExistHandler.hasProperties(data)) {
          this.user.sendUTF(DoesUsernameExistHandler.getReturnObject(data.data.username, await DoesUserExist.doesUsernameExist(data.data.username)));
        } else {
          this.user.sendUTF(DoesUsernameExistHandler.getErrorReturnObject("Object does not have the needed properties"));
        }
      } catch (e) {
        console.error("DOES_USERNAME_EXIST_ERROR", e);
        this.user.sendUTF(DoesUsernameExistHandler.getErrorReturnObject("Unexpected Error occurred"));
      }
    });
  }

  static hasProperties(data) {
    if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {
      if (data.data.hasOwnProperty("username")) {
        if (typeof data.data.username === 'string') {
          return true;
        }
      }
    }
    return false;
  }

  static getReturnObject(username, exists) {
    return {
      type: "DOES_USERNAME_EXIST",
      data: {
        username: username,
        exists: exists
      }
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "DOES_USERNAME_EXIST_ERROR",
      data: {},
      cause: cause
    };
  }
};

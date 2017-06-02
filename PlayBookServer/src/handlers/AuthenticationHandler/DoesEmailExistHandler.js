"use strict";
const DoesUserExist = require("../../actions/DoesUserExist");

module.exports = class DoesEmailExistHandler {
  constructor(user) {
    this.user = user;

    this.user.messageEmitter.on("DOES_EMAIL_EXIST",async (data) => {
      try {
        if (DoesEmailExistHandler.hasProperties(data)) {
          this.user.sendUTF(DoesEmailExistHandler.getReturnObject(data.data.email, await DoesUserExist.doesEmailExist(data.data.email)));
        } else {
          this.user.sendUTF(DoesEmailExistHandler.getErrorReturnObject("Object does not have the needed properties"));
        }
      } catch (e) {
        console.error("DOES_EMAIL_EXIST_ERROR", e);
        this.user.sendUTF(DoesEmailExistHandler.getErrorReturnObject("Unexpected Error occurred"));
      }
    });
  }

  static hasProperties(data) {
    if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {
      if (data.data.hasOwnProperty("email")) {
        if (typeof data.data.email === 'string') {
          return true;
        }
      }
    }
    return false;
  }

  static getReturnObject(email, exists) {
    return {
      type: "DOES_EMAIL_EXIST",
      data: {
        email: email,
        exists: exists
      }
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "DOES_EMAIL_EXIST_ERROR",
      data: {},
      cause: cause
    };
  }
};

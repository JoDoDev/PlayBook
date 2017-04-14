"use strict";


module.exports = class LoginHandler {
    constructor(user) {
      this.user = user;

      this.user.messageEmitter.on("LOGOUT",async (data) => {
        if (this.user.loggedIn === false) {
          this.user.sendUTF(LoginHandler.getErrorReturnObject("You are not logged in"));
        } else {
          this.user.setInitialData();
          this.user.sendUTF(LoginHandler.getReturnObject());
        }
      });
    }

  static getReturnObject() {
    return {
      type: "LOGOUT",
      data: {}
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "LOGOUT_ERROR",
      data: {},
      cause: cause
    };
  }
};

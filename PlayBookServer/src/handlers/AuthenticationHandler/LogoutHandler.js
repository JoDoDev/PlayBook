"use strict";


module.exports = class LogoutHandler {
    constructor(user) {
      this.user = user;

      this.user.messageEmitter.on("LOGOUT",async (data) => {
        try {
          if (this.user.loggedIn === false) {
            this.user.sendUTF(LogoutHandler.getErrorReturnObject("You are not logged in"));
          } else {
            this.user.setInitialData();
            this.user.sendUTF(LogoutHandler.getReturnObject());
          }
        } catch (e) {
          console.error("LOGOUT_ERROR", e);
          this.user.sendUTF(LogoutHandler.getErrorReturnObject("Unexpected Error occurred"));
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

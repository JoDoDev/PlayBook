"use strict";
const DatabaseHelper = require("../../../database/DatabaseHelper/DatabaseHelper");
const MultiJService = require("../../../services/gameServices/MultiJService");


module.exports = class MultiJQuitHandler {
    constructor(user, multiJHandler) {
      this.user = user;
      this.multiJHandler = multiJHandler;

      this.user.messageEmitter.on("MULTIJ_QUIT",async (data) => {
        try {
          if (this.user.loggedIn === false) {
            this.user.sendUTF(MultiJFinishHandler.getErrorReturnObject( "You need to be logged in"));
            return;
          }
          if (this.multiJHandler.isJoined === false) {
            this.user.sendUTF(MultiJFinishHandler.getErrorReturnObject("You are not joined"));
            return;
          }


          this.multiJHandler.multiJService = null;
          this.multiJHandler.isJoined = false;
          this.user.sendUTF(MultiJFinishHandler.getReturnObject());
        } catch (e) {
          console.error("MULTIJ_QUIT", e);
          this.user.sendUTF(MultiJFinishHandler.getErrorReturnObject("Unexpected Error occurred"));
        }
      });
    }

  static getReturnObject() {
    return {
      type: "MULTIJ_QUIT",
      data: { }
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "MULTIJ_QUIT_ERROR",
      data: { },
      cause: cause
    };
  }
};

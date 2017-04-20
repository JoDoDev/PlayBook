"use strict";
const DatabaseHelper = require("../../../database/DatabaseHelper/DatabaseHelper");
const MultiJService = require("../../../services/gameServices/MultiJService");


module.exports = class MultiJFinishHandler {
    constructor(user, multiJHandler) {
      this.user = user;
      this.multiJHandler = multiJHandler;

      this.user.messageEmitter.on("MULTIJ_FINISH",async (data) => {
        try {
          if (this.user.loggedIn === false) {
            this.user.sendUTF(MultiJJoinHandler.getErrorReturnObject( "You need to be logged in"));
            return;
          }
          if (this.multiJHandler.isJoined === true) {
            this.user.sendUTF(MultiJFinishHandler.getErrorReturnObject("You are already joined"));
            return;
          }
          if (this.multiJHandler.multiJService.finished === false) {
            this.user.sendUTF(MultiJFinishHandler.getErrorReturnObject("Your MultiJ game is not finished"));
            return;
          }


          this.user.sendUTF(MultiJFinishHandler.getReturnObject(
            this.multiJHandler.multiJService.points,
            this.multiJHandler.multiJService.questionAmount,
            this.multiJHandler.multiJService.time,
            this.multiJHandler.multiJService.getAnsweredQuestionsReturnObject()
          ));
          this.multiJHandler.isJoined = false;
          this.multiJHandler.multiJService = null;
        } catch (e) {
          console.error("MULTIJ_FINISH_ERROR", e);
          this.user.sendUTF(MultiJFinishHandler.getErrorReturnObject("Unexpected Error occurred"));
        }
      });
    }


  static getReturnObject(points, yourpoints, time, questions) {
    return {
      type: "MULTIJ_FINISH",
      data: {
        points: points,
        yourpoints: yourpoints,
        time: time,
        questions: questions
      }
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "MULTIJ_FINISH_ERROR",
      data: {  },
      cause: cause
    };
  }
};

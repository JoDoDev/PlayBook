"use strict";
const DatabaseHelper = require("../../../database/DatabaseHelper/DatabaseHelper");
const MultiJService = require("../../../services/gameServices/MultiJService");


module.exports = class MultiJAnswerQuestionHandler {
  constructor(user, multiJHandler) {
    this.user = user;
    this.multiJHandler = multiJHandler;

    this.user.messageEmitter.on("MULTIJ_ANSWER_QUESTION",async (data) => {
      try {
        if (MultiJAnswerQuestionHandler.hasProperties(data) === false) {
          this.user.sendUTF(MultiJAnswerQuestionHandler.getErrorReturnObject("Object does not have the needed properties"));
          return;
        }
        if (this.user.loggedIn === false) {
          this.user.sendUTF(MultiJAnswerQuestionHandler.getErrorReturnObject( "You need to be logged in"));
          return;
        }
        if (this.multiJHandler.isJoined === false) {
          this.user.sendUTF(MultiJAnswerQuestionHandler.getErrorReturnObject("You are not joined"));
          return;
        }


        this.multiJHandler.multiJService.answerQuestion(data.data.questionid, data.data.answerid);
      } catch (e) {
        console.error("MULTIJ_ANSWER_QUESTION_ERROR", e);
        this.user.sendUTF(MultiJAnswerQuestionHandler.getErrorReturnObject("Unexpected Error occurred"));
      }
    });
  }

  static hasProperties(data) {
    // Check if data object has the needed values
    if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {
      //noinspection SpellCheckingInspection
      if (data.data.hasOwnProperty("questionid") &&
          data.data.hasOwnProperty("answerid") ) {
        if (typeof data.data.questionid === 'number' &&
            typeof data.data.answerid === 'number') {
          return true;
        }
      }
    }
    return false;
  }

  static getReturnObject() {
    return {
      type: "MULTIJ_ANSWER_QUESTION",
      data: { }
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "MULTIJ_ANSWER_QUESTION_ERROR",
      data: { },
      cause: cause
    };
  }
};

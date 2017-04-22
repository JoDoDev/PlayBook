"use strict";
const DatabaseHelper = require("../../../database/DatabaseHelper/DatabaseHelper");
const MultiJService = require("../../../services/gameServices/MultiJService");


module.exports = class MultiJJoinHandler {
    constructor(user, multiJHandler) {
      this.user = user;
      this.multiJHandler = multiJHandler;

      this.user.messageEmitter.on("MULTIJ_JOIN",async (data) => {
        try {
          if (MultiJJoinHandler.hasProperties(data) === false) {
            this.user.sendUTF(MultiJJoinHandler.getErrorReturnObject("Object does not have the needed properties"));
            return;
          }
          if (this.user.loggedIn === false) {
            this.user.sendUTF(MultiJJoinHandler.getErrorReturnObject( "You need to be logged in"));
            return;
          }
          if (this.multiJHandler.isJoined === true) {
            this.user.sendUTF(MultiJJoinHandler.getErrorReturnObject("You are already joined"));
            return;
          }

          let qResultQuestions = await DatabaseHelper.getQuestionsForTopic(1,8);

          var questions = {};
          var questionsAdmin = {};
          for (var question of qResultQuestions) {
            if (typeof questions[question.questionId] === 'undefined') {
              questions[question.questionId] = {
                questionText: question.questionText
              };
              questionsAdmin[question.questionId] = {
                questionText: question.questionText
              };
            }

            questions[question.questionId][question.answerId] = {
              AnswerText: question.answerText
            };
            questionsAdmin[question.questionId][question.answerId] = {
              AnswerText: question.answerText,
              isCorrect: question.isCorrect
            };
          }

          this.multiJHandler.multiJService = new MultiJService(questionsAdmin);
          this.multiJHandler.isJoined = true;
          this.user.sendUTF(MultiJJoinHandler.getReturnObject(questions));
        } catch (e) {
          console.error("MULTIJ_JOIN_ERROR", e);
          this.user.sendUTF(MultiJJoinHandler.getErrorReturnObject("Unexpected Error occurred"));
        }
      });
    }

  static hasProperties(data) {
    // Check if data object has the needed values
    if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {
      if (data.data.hasOwnProperty("topic")) {
        if (typeof data.data.topic === 'number') {
          return true;
        }
      }
    }
    return false;
  }


  static getReturnObject(questions) {
    return {
      type: "MULTIJ_JOIN",
      data: {
        questions: questions
      }
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "MULTIJ_JOIN_ERROR",
      data: { },
      cause: cause
    };
  }
};

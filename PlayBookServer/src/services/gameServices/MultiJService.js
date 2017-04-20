"use strict";

module.exports = class MultiJService {
  constructor(questions) {
    this.questions = questions;
    this.startTime = Date.now();
    this.answeredQuestions = {};
    this.finished = false;
  }

  answerQuestion(questionId, answerId) {
    if (this.questions.hasOwnProperty(questionId) === true) {
      if (this.questions[questionId].hasOwnProperty(answerId) === true) {
        this.answeredQuestions[questionId] = {
          yourAnswerId: answerId,
          yourAnswerText: this.questions[questionId][answerId].AnswerText,
          questionText: this.questions[questionId].questionText
        }
      }
    }

    if (Object.keys(this.questions).length === Object.keys(this.answeredQuestions).length) {
      this.finished = true;
    }
  }


};



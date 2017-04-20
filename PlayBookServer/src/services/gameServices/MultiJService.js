"use strict";

module.exports = class MultiJService {
  constructor(questions) {
    this.questions = questions;
    this.questionAmount = Object.keys(this.questions).length;
    this.points = 0;
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

    if (this.questionAmount === Object.keys(this.answeredQuestions).length) {
      this.finished = true;
    }
  }

  getAnsweredQuestionsReturnObject() {

  }

  get time() {
    return (this.startTime - Date.now()) * 1000;
  }


};



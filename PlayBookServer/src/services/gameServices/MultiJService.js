"use strict";

module.exports = class MultiJService {
  constructor(questions) {
    this.questions = questions;
    this.questionAmount = Object.keys(this.questions).length;
    this.startTime = Date.now();
    this.answeredQuestions = {};
    this.finished = false;
  }

  answerQuestion(questionId, answerId) {
    if (this.questions.hasOwnProperty(questionId) === true) {
      if (this.questions[questionId].hasOwnProperty(answerId) === true) {
        this.answeredQuestions[questionId] = {
          yourAnswerId: answerId,
          yourAnswerText: this.questions[questionId][answerId].answerText,
          questionText: this.questions[questionId].questionText,
          correct: this.questions[questionId][answerId].isCorrect
        }
      }
    }

    if (this.questionAmount === Object.keys(this.answeredQuestions).length) {
      this.finished = true;
    }
  }

  getAnsweredQuestionsReturnObject() {
    return this.answeredQuestions;
  }

  get time() {
    return (this.startTime - Date.now()) * 1000;
  }

  get points() {
    var yourPoints = 0;
    for (let answeredQuestion in this.answeredQuestions) {
      if (answeredQuestion.correct) {
        yourPoints++;
      }
    }
    return yourPoints;
  }


};



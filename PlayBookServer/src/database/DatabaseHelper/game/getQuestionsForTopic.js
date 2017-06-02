"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function getQuestionsForTopic (topicId, numQuestions) {
  try {
    let sqlPrepare = 'select a.answerId, a.answerText, a.isCorrect, q2.questionId, q2.questionText from answer a INNER JOIN question q2 ON q2.questionId = a.fk_question where a.fk_question in ( select * from (select q.questionId from question q where q.fk_topic = ? order by rand() limit ?) innerTable);';
    let inserts = [topicId, numQuestions];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

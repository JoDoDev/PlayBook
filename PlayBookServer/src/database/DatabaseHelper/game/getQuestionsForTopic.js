"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function getQuestionsForTopic (topicId, numQuestions) {
  try {
    let sqlPrepare = 'SELECT q.* from `topic` t INNER JOIN `question` q ON t.topicId = q.fk_topic WHERE t.topicId = ? ORDER  BY RAND() LIMIT ?;';
    let inserts = [topicId, numQuestions];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

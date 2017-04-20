"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function getAnswersForQuestion (questionId) {
  try {
    let sqlPrepare = 'SELECT a.* FROM answer a WHERE a.fk_question = ? ORDER BY RAND();';
    let inserts = [questionId];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

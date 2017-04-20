"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function getTopics () {
  try {
    let sqlPrepare = 'SELECT * From topic';
    let inserts = [];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

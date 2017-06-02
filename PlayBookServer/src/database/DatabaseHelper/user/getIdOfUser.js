"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function getIdOfUser (uniqueKey) {
  try {
    let sqlPrepare = 'SELECT userId FROM user WHERE username = ? OR email = ?';
    let inserts = [uniqueKey, uniqueKey];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

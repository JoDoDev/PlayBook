"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function setSessionKey (userId, SessionKey) {
  try {
    let sqlPrepare = 'INSERT INTO `session`(`fk_user`, `sessionKey`) VALUES (?, ?)';
    let inserts = [userId, SessionKey];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

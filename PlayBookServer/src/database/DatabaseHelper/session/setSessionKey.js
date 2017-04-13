"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");

module.exports = async function setSessionKey (userId, SessionKey) {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'INSERT INTO `session`(`fk_user`, `sessionKey`) VALUES (?, ?)';
    let inserts = [userId, SessionKey];
    let res = await makeQuery(sqlPrepare, inserts, dbConn);
    return res;
  } catch (e) {
    console.error(e);
  }
};

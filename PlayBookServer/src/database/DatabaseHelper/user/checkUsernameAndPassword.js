"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");

module.exports = async function checkUsernameAndPassword (username, password) {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'SELECT userId, username, email, ( CASE WHEN COUNT(*) = 1 THEN "true" ELSE "false" END) AS "success" from `user` WHERE `email` = ? AND `password` = ? OR `username` = ? AND `password` = ?';
    let inserts = [username, password, username, password];
    let res =  await makeQuery(sqlPrepare, inserts, dbConn);
    return res;
  } catch (e) {
    console.error(e);
  }
};

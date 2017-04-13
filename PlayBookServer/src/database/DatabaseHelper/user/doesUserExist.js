"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");

module.exports = async function doesUserExist (username, email)  {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'SELECT ( CASE WHEN COUNT(*) = 1 THEN "true" ELSE "false" END) AS "exists" from `user` WHERE `email` = ? OR `username` = ?';
    let inserts = [email, username];
    return await makeQuery(sqlPrepare, inserts, dbConn);
  } catch (e) {
    console.error(e);
  }
};

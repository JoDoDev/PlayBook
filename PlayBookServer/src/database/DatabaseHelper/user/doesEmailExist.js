"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");

module.exports = async function doesEmailExist (email)  {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'SELECT ( CASE WHEN COUNT(*) = 0 THEN "false" ELSE "true" END) AS "exists" from `user` WHERE `email` = ?';
    let inserts = [email];
    return await makeQuery(sqlPrepare, inserts, dbConn);
  } catch (e) {
    console.error(e);
  }
};

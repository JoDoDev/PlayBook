"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");

module.exports = async function doesUserExist (username, email)  {
  try {
    let sqlPrepare = 'SELECT ( CASE WHEN COUNT(*) = 0 THEN "false" ELSE "true" END) AS "exists" from `user` WHERE `email` = ? OR `username` = ?';
    let inserts = [email, username];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

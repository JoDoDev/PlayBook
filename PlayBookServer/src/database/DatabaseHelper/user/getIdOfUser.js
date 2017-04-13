"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");

module.exports = async function getIdOfUser (uniqueKey) {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'SELECT userId FROM user WHERE username = ? OR email = ?';
    let inserts = [uniqueKey, uniqueKey];
    let res =  await makeQuery(sqlPrepare, inserts, dbConn);
    return res;
  } catch (e) {
    console.error(e);
  }
};

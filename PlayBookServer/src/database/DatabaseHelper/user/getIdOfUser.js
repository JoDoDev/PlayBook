"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");

module.exports = async function getIdOfUser (uniqueKey) {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'SELECT userId FROM user WHERE username = ? OR email = ?';
    let inserts = [uniqueKey, uniqueKey];
    return await makeQuery(sqlPrepare, inserts, dbConn);
  } catch (e) {
    console.error(e);
  }
};

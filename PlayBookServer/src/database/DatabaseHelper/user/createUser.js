"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");


module.exports = async function createUser (username, email, password) {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'INSERT INTO `user`(`email`, `password`, `username`) VALUES (?, ?, ?)';
    let inserts = [email, password, username];
    return await makeQuery(sqlPrepare, inserts, dbConn);
  } catch (e) {
    console.error(e);
  }
};

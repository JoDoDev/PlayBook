"use strict";
const databaseConnectionProvider = require("../../DatabaseConnectionProvider");
const makeQuery = require("../../makeQuery");


module.exports = async function createUser (username, email, password) {
  try {
    let dbConn = await databaseConnectionProvider.getConnection();
    let sqlPrepare = 'INSERT INTO `user`(`email`, `password`, `username`) VALUES (?, ?, ?)';
    let inserts = [email, password, username];
    let res = await makeQuery(sqlPrepare, inserts, dbConn);
    return res;
  } catch (e) {
    console.error(e);
  }
};

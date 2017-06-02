"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function checkUsernameAndPassword (username, password) {
  try {
    let sqlPrepare = 'SELECT userId, username, email, ( CASE WHEN COUNT(*) = 1 THEN "true" ELSE "false" END) AS "success" from `user` WHERE `email` = ? AND `password` = ? OR `username` = ? AND `password` = ?';
    let inserts = [username, password, username, password];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

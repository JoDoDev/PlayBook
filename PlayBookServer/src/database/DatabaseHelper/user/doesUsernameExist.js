"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function doesUsernameExist (username)  {
  try {
    let sqlPrepare = 'SELECT ( CASE WHEN COUNT(*) = 0 THEN "false" ELSE "true" END) AS "exists" from `user` WHERE `username` = ?';
    let inserts = [username];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

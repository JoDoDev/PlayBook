"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function doesEmailExist (email)  {
  try {
    let sqlPrepare = 'SELECT ( CASE WHEN COUNT(*) = 0 THEN "false" ELSE "true" END) AS "exists" from `user` WHERE `email` = ?';
    let inserts = [email];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

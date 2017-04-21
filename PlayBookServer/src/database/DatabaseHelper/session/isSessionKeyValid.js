"use strict";
const makeQuery = require("../../makeQuery");

module.exports = async function isSessionKeyValid (sessionKey, daysValid) {
  try {
    let sqlPrepare = 'SELECT ( CASE WHEN COUNT(*) >= 1 THEN "true" ELSE "false" END) as "valid", u.email, u.username, u.userId FROM session s INNER JOIN user u ON u.userId = s.fk_user WHERE s.sessionKey = ? AND DATEDIFF(NOW(), s.loginDate) <= ?';
    let inserts = [sessionKey, daysValid];
    return await makeQuery(sqlPrepare, inserts);
  } catch (e) {
    console.error(e);
  }
};

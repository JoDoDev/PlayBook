"use strict";

module.exports = function makeQuery (sqlPrepare, inserts, dbConn) {
  return (new Promise((fulfill, reject) => {
      dbConn.query(sqlPrepare, inserts, (err, results, fields) => {
        if(err) {
          reject(err);
        } else {
          fulfill(results);
        }
      });
    })
  );
};

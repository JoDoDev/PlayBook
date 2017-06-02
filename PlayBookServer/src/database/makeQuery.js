"use strict";
const databaseConnectionProvider = require("./DatabaseConnectionProvider");

module.exports = function makeQuery (sqlPrepare, inserts) {
  return (new Promise((fulfill, reject) => {
      databaseConnectionProvider.getConnection().then((dbConn) => {
        dbConn.query(sqlPrepare, inserts, (err, results, fields) => {
          dbConn.release();
          if(err) {
            reject(err);
          } else {
            fulfill(results);
          }
        });
      }).catch((err) => {
        throw err;
      });
    })
  );
};

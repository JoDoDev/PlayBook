"use strict";

const databaseConnectionProvider = require("./DatabaseConnectionProvider");

let DatabaseHelper = class DatabaseHelper {
  async checkUsernameAndPassword(username, password) {
    try {
      let dbConn = await databaseConnectionProvider.getConnection();
      let sqlPrepare = 'SELECT userId, ( CASE WHEN COUNT(*) = 1 THEN "true" ELSE "false" END) AS "success" from `user` WHERE `email` = ? AND `password` = ? OR `username` = ? AND `password` = ?';
      let inserts = [username, password, username, password];
      let results = await this.makeQuery(sqlPrepare, inserts, dbConn);
      return results;
    } catch (e) {
      console.error(e);
    }
  }

  async setSessionKey(userId, SessionKey) {
    try {
      let dbConn = await databaseConnectionProvider.getConnection();
      let sqlPrepare = 'INSERT INTO `session`(`fk_user`, `sessionKey`) VALUES (?, ?)';
      let inserts = [userId, SessionKey];
      let results = await this.makeQuery(sqlPrepare, inserts, dbConn);
      return results;
    } catch (e) {
      console.error(e);
    }
  }

  makeQuery(sqlPrepare, inserts, dbConn) {
    return (new Promise((fulfill, reject) => {
        dbConn.query(sqlPrepare, inserts, (err, results, fields) => {
        if(err) {
          reject(error);
        } else {
          fulfill(results);
        }
        });
      })
    );
  }

};


let databaseHelper = new DatabaseHelper();
module.exports = databaseHelper;

"use strict";
const mysql = require('mysql');


const connectionOptions = {
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: '',
  database: 'playbook',
  connectionLimit : 10
};


let DatabaseConnectionProvider = class DatabaseConnectionProvider {
  constructor() {
    this.pool = mysql.createPool(connectionOptions);
  }

  getConnection() {
    return new Promise((fulfill, reject) => {
      this.pool.getConnection(function(err, connection) {
        if(err) {
          reject(err);
        } else {
          fulfill(connection);
        }
      });
    });
  }
};

let databaseConnectionProvider = new DatabaseConnectionProvider();
module.exports = databaseConnectionProvider;

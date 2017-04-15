"use strict";
const databaseHelper = require("../database/DatabaseHelper/DatabaseHelper");

module.exports = class DoesUserExist {
  static async doesUserExistWithUsernameOrEmail(username, email) {
    let qResult = await databaseHelper.doesUserExist(username, email);
    return (qResult[0].exists === 'true');
  }

  static async doesEmailExist(email) {
    let qResult = await databaseHelper.doesEmailExist(email);
    return (qResult[0].exists === 'true');
  }

  static async doesUsernameExist(username) {
    let qResult = await databaseHelper.doesUsernameExist(username);
    return (qResult[0].exists === 'true');
  }
};

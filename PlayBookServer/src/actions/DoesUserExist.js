"use strict";
const DatabaseHelper = require("../database/DatabaseHelper/DatabaseHelper");

module.exports = class DoesUserExist {
  static async doesUserExistWithUsernameOrEmail(username, email) {
    let qResult = await DatabaseHelper.doesUserExist(username, email);
    return (qResult[0].exists === 'true');
  }

  static async doesEmailExist(email) {
    let qResult = await DatabaseHelper.doesEmailExist(email);
    return (qResult[0].exists === 'true');
  }

  static async doesUsernameExist(username) {
    let qResult = await DatabaseHelper.doesUsernameExist(username);
    return (qResult[0].exists === 'true');
  }
};

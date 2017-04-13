"use strict";
const databaseHelper = require("../database/DatabaseHelper/DatabaseHelper");

let DoesUserExist = class DoesUserExist {
  async doesUserExistWithUsernameOrEmail(username, email) {
    try {
      let qResult = await databaseHelper.doesUserExist(username, email);
      return (qResult[0].exists === 'true');
    } catch (e) {
    }
  }

  static doesUserExistWithUserId(userId) {

  }
};


let doesUserExist = new DoesUserExist();
module.exports = doesUserExist;

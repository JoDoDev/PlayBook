"use strict";
// User
const checkUsernameAndPassword = require("./user/checkUsernameAndPassword");
const doesUserExist = require("./user/doesUserExist");
const doesEmailExist = require("./user/doesEmailExist");
const doesUsernameExist = require("./user/doesUsernameExist");
const createUser = require("./user/createUser");
const getIdOfUser = require("./user/getIdOfUser");
// Session
const setSessionKey = require("./session/setSessionKey");


module.exports = class DatabaseHelper {

  /*
    User
  */

  static async checkUsernameAndPassword(username, password) {
    return await checkUsernameAndPassword(username, password);
  }

  static async doesUserExist(username, email) {
    return await doesUserExist(username, email);
  }

  static async doesEmailExist(email) {
    return await doesEmailExist(email);
  }

  static async doesUsernameExist(username) {
    return await doesUsernameExist(username);
  }

  static async createUser(username, email, password) {
    return await createUser(username, email, password);
  }

  static async getIdOfUser(uniqueKey) {
    return await getIdOfUser(uniqueKey);
  }

  /*
    Session
  */

  static async setSessionKey (userId, SessionKey) {
    return await setSessionKey(userId, SessionKey);
  }

};

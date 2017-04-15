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


let DatabaseHelper = class DatabaseHelper {

  /*
    User
  */

  async checkUsernameAndPassword(username, password) {
    return await checkUsernameAndPassword(username, password);
  }

  async doesUserExist(username, email) {
    return await doesUserExist(username, email);
  }

  async doesEmailExist(email) {
    return await doesEmailExist(email);
  }

  async doesUsernameExist(username) {
    return await doesUsernameExist(username);
  }

  async createUser(username, email, password) {
    return await createUser(username, email, password);
  }

  async getIdOfUser(uniqueKey) {
    return await getIdOfUser(uniqueKey);
  }

  /*
    Session
  */

  async setSessionKey (userId, SessionKey) {
    return await setSessionKey(userId, SessionKey);
  }

};


let databaseHelper = new DatabaseHelper();
module.exports = databaseHelper;

"use strict";
const databaseHelper = require("../../database/DatabaseHelper");

module.exports = class RegisterHandler {
    constructor(user) {
      this.user = user;

      this.user.messageEmitter.on("LOGIN",async (data) => {
        if (RegisterHandler.hasProperties(data)) {

        }
      });
    }

    static hasProperties(data) {
      // Check if data object has the needed values
      if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null) {

        if (data.data.hasOwnProperty("username") &&
          data.data.hasOwnProperty("password") &&
          data.data.hasOwnProperty("email")) {

          // Check if the username and password are of accepted types
          if (typeof data.data.username === 'string' || typeof data.data.username === 'number' &&
            typeof data.data.password === 'string' || typeof data.data.password === 'number' &&
            typeof data.data.email === 'string') {

            return true;
          }
        }
      }
      return false;
    }
};

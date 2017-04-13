"use strict";
const databaseHelper = require("../../database/DatabaseHelper");


module.exports = class LoginHandler {
    constructor(user) {
      this.user = user;

      this.user.messageEmitter.on("LOGIN",async (data) => {
        // Check if data object has the needed values
        if(data.hasOwnProperty("data") && typeof data === 'object' && data.data !== null && data.data.hasOwnProperty("username") && data.data.hasOwnProperty("password")) {
          // Check if the username and password are of accepted types
          if(typeof data.data.username !== 'string' && typeof data.data.username !== 'number' && typeof data.data.password !== 'string' || typeof data.data.password !== 'number' ){
            let result = await databaseHelper.login(data.data.username, data.data.password);
          }
        }
      });
    }
};

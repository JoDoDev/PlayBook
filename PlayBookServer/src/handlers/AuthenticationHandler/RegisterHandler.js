"use strict";
const databaseHelper = require("../../database/DatabaseHelper");

module.exports = class RegisterHandler {
    constructor(user) {
      this.user = user;
    }
};

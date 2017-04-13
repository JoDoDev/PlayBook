"use strict";
const LoginHandler = require("./LoginHandler");

module.exports = class AuthenticationHandler {
    constructor(user) {
      this.user = user;

      this.loginHandler = new LoginHandler(user);
    }
};


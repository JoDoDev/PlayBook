"use strict";
const LoginHandler = require("./LoginHandler");
const RegisterHandler = require("./RegisterHandler");

module.exports = class AuthenticationHandler {
    constructor(user) {
      this.user = user;

      this.loginHandler = new LoginHandler(user);
      this.registerHandler = new RegisterHandler(user);
    }
};


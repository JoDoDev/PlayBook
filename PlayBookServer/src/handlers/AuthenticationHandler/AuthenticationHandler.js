"use strict";
const LoginHandler = require("./LoginHandler");
const RegisterHandler = require("./RegisterHandler");
const DoesEmailExistHandler = require("./DoesEmailExistHandler");
const DoesUsernameExistHandler = require("./DoesUsernameExistHandler");
const LogoutHandler = require("./LogoutHandler");

module.exports = class AuthenticationHandler {
    constructor(user) {
      this.user = user;

      this.loginHandler = new LoginHandler(user);
      this.registerHandler = new RegisterHandler(user);
      this.doesEmailExistHandler = new DoesEmailExistHandler(user);
      this.doesUsernameExistHandler = new DoesUsernameExistHandler(user);
      this.logoutHandler = new LogoutHandler(user);
    }
};



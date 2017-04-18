"use strict";
const uuidV4 = require('uuid/v4');
const User = require("../entity/User");

class UserService {
    constructor() {
      this.users = {};
      this.userCounter = 0;
    }

    createUser(connection) {
      let userIndex = uuidV4();
      this.users[userIndex] = new User(connection, this, userIndex);
      this.userCounter++;
    }

    deleteUser(userIndex) {
      delete this.users[userIndex];
      this.userCounter--;
    }

    getUser(userIndex) {
      return this.users[userIndex];
    }
}

var userService = new UserService();
module.exports = userService;

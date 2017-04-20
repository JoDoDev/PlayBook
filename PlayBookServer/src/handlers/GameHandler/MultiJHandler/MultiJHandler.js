"use strict";
const MultiJJoinHandler = require("./MultiJJoinHandler");
const MultiJQuitHandler = require("./MultiJQuitHandler");


module.exports = class MultiJHandler {
    constructor(user) {
      this.user = user;
      this.multiJService = null;
      this.isJoined = false;

      this.multiJJoinHandler = new MultiJJoinHandler(this.user, this);
      this.multiJQuitHandler = new MultiJQuitHandler(this.user, this);
    }
};



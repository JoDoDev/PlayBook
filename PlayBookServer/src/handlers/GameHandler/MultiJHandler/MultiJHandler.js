"use strict";
const MultiJJoinHandler = require("./MultiJJoinHandler");


module.exports = class MultiJHandler {
    constructor(user) {
      this.user = user;
      this.multiJService = null;
      this.isJoined = false;

      this.multiJJoinHandler = new MultiJJoinHandler(this.user, this);
    }
};



"use strict";
const MultiJHandler = require("./MultiJHandler/MultiJHandler");


module.exports = class GameHandler {
    constructor(user) {
      this.user = user;

      this.multiJHandler = new MultiJHandler(this.user);
    }
};



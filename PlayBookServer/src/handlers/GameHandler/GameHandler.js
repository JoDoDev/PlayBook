"use strict";
const MultiJHandler = require("./MultiJHandler/MultiJHandler");
const GetTopicsHandler = require("./GetTopicsHandler");


module.exports = class GameHandler {
    constructor(user) {
      this.user = user;

      this.multiJHandler = new MultiJHandler(this.user);
      this.getTopicsHandler = new GetTopicsHandler(this.user);
    }
};



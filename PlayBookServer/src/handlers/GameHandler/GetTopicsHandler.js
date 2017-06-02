"use strict";
const DatabaseHelper = require("../../database/DatabaseHelper/DatabaseHelper");

module.exports = class GetTopicsHandler {
    constructor(user) {
      this.user = user;

      this.user.messageEmitter.on("GET_TOPICS",async (data) => {
        try {
          var qResult = await DatabaseHelper.getTopics();
          var topics = {};
          for (let topic of qResult) {
            topics[topic.topicId] = {
              name: topic.name,
              description: topic.description
            }
          }
          this.user.sendUTF(GetTopicsHandler.getReturnObject(topics));
        } catch (e) {
          console.error("GET_TOPICS_ERROR", e);
          this.user.sendUTF(GetTopicsHandler.getErrorReturnObject("Unexpected Error occurred"));
        }
      });
    }

  static getReturnObject(topics) {
    return {
      type: "GET_TOPICS",
      data: {topics}
    };
  }

  static getErrorReturnObject(cause) {
    return {
      type: "GET_TOPICS_ERROR",
      data: {},
      cause: cause
    };
  }
};


var axios = require("axios");


var authKey = "9060b04f93d74976b6ae49a0e3af4d8c";
var helper = {

  runQuery: function(location) {
    console.log("helpers.js runQuery");
    return "helpers.js runQuery";
    
  },

  getHistory: function() {
    console.log("helpers.js getHistory");
    return axios.get("/api");
  },

  postHistory: function(location) {
    console.log("helpers.js postHistory");
    return "helpers.js postHistory";
    
  }
};

module.exports = helper;

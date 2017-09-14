var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var Article = require("./models/Article.js");
var Note = require("./models/Note.js");
var app = express();
app.use(logger("dev"));
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));
mongoose.Promise = Promise;
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/nytreact");
}
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", function(req, res) {
  console.log("fired server get api");
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("doc=", doc);
      res.send(doc);
    }
  });
});



app.listen(PORT, function() {
  console.log("Server running, port = " + PORT);
});

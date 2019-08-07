require("dotenv/config");
var http = require("http");
var path = require("path");
var express = require("express");

let { SERVER_PORT } = process.env;
var app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

var httpServer = http.createServer(app);

httpServer.listen(SERVER_PORT, err => {
  return err
    ? console.log("app:server", `Failed to start server instance %O`, err)
    : console.log("app:server", `HTTP listening on port ${SERVER_PORT}`);
});

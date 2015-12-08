var express = require("express")();
var http = require("http").createServer(express);
var io = require("socket.io")(http);

var chat = new (require("./chat")).Chat(io);

express.get("/chat", function(req, res) {
    res.send("it works!");
});

express.listen(3000);
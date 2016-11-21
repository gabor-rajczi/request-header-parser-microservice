var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.get("/", parseHeader);

app.listen(port, running);

function running(){
    console.log("App is running on port "+port+"!");
}

function parseHeader(req, res){
    var ip = req.headers['x-forwarded-for'];
    var acceptLanguage = req.headers["accept-language"].split(",")[0];
    var userAgent = req.headers['user-agent'].split("(")[1].split(")")[0];
    var result = {
        ipaddress: ip,
        language: acceptLanguage,
        software: userAgent,
    }
    res.send(result);
}
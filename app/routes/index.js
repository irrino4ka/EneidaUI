var express = require('express');
var router = express.Router();

var express = require("express");
var app     = express();

app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
       
     res.sendFile('index.html');

});

module.exports = router;
"use strict";

var debug = require("debug");
debug("server.js")("working");

const bodyParser = require('body-parser')
const hostname = 'dick-bromley.com'
const express = require('express')
const https = require('https')
const path = require('path')

var app = express();
app.use(express.urlencoded({ extended: false }));


var mysql = require("mysql");
var fs = require('fs');
var http = require('http');

let address = '127.0.0.1';
var httpServer = http.createServer(app);

app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/client/index.html');
});
app.post('/newEmail', function(req, res)
{
    console.log('got here');
})
app.get('/*.css', function(req, res)
{
    console.log(req.url);
    res.sendFile(__dirname + req.url);
});
app.get('/*.js', function(req, res)
{
    console.log(req.url);
    res.sendFile(__dirname + req.url);
});
app.get('/*.html', function(req, res)
{
    console.log(req.url);
    res.sendFile(__dirname + '/client/' + req.url);
});

app.get('/*.png', function(req, res)
{
    console.log(req.url);
    res.sendFile(__dirname + req.url);
});

app.get('/*.jpg', function(req, res)
{
    console.log(req.url);
    res.sendFile(__dirname + req.url);
});

app.listen(8080, address, function()
{
    return console.log('Server Running');
});
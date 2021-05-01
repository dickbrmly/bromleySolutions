"use strict";

var debug = require("debug");
var express = require("express");
var mysql = require("mysql");
var fs = require('fs');
var http = require('http');
var https = require('https');

const {spawn} = require("child_process");

  var options = 
  {
     key: fs.readFileSync('./keys/bromley-solutions.key'),
     ca: [fs.readFileSync('./keys/347375790repl_2.ca-bundle')],
     cert: fs.readFileSync('./keys/347375790repl_2.crt'),
     requestCert: false,
     rejectUnaithorized: false
  };
  
  var app = express();
  debug("server.js")("working");


// let address = '174.69.163.24';
         let address = '127.0.0.1';

         var httpsServer = https.createServer( /* options,*/
         app);

         app.get('/', function (req, res) 
         {
            res.sendFile(__dirname + '/client/index.html');
         });
         app.get('/*.css', function (req, res)
         {
            console.log(req.url);
            res.sendFile(__dirname + req.url);
         });
         app.get('/*.js', function (req, res)
         {
            console.log(req.url);
            res.sendFile(__dirname + req.url);
         });
         app.get('/*.html', function (req, res)
         {
            console.log(req.url);

            res.sendFile(__dirname + '/client/' + req.url);
         });
         app.get('/*.png', function (req, res)
         {
            console.log(req.url);

            res.sendFile(__dirname + req.url);
         });

         app.listen(8080, address, function ()
         {
            return console.log('Server Running');
         });

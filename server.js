"use strict";

// server.js
const bodyParser = require('body-parser')
const hostname = 'dick-bromley.com'
const express = require('express')

const https = require('https')
const path = require('path')

const fs = require('fs')
const app = express()
const port = 3000;

let options = {
    cert: fs.readFileSync(__dirname + '/Certs/174_69_163_24.crt'), // fs.readFileSync('./ssl/example.crt');
    ca: fs.readFileSync(__dirname + '/Certs/174_69_163_24.ca-bundle'),
    key: fs.readFileSync(__dirname + '/Certs/174.69.163.24.key')
};


https.createServer(options, app).listen(port, () =>
{

    console.log(`Success! Your application is running on port ${port}.`);
})

app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/client/index.html');
    console.log('done');
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
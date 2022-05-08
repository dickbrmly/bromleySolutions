"use strict";

// server.js
const bodyParser = require('body-parser')
const hostname = 'dick-bromley.com'
const express = require('express')
const https = require('https')
const path = require('path')

const fs = require('fs')
const app = express()
var http = express();
const port = 443;

let options = {
    cert: fs.readFileSync(__dirname + '/Certs/dick-bromley_com.crt'), // fs.readFileSync('./ssl/example.crt');
    ca: fs.readFileSync(__dirname + '/Certs/dick-bromley_com.ca-bundle'),
    key: fs.readFileSync(__dirname + '/Certs/server.key')
};

http.get('*', function(req, res)
{
    res.redirect('https://www.dick-bromley.com');
})
http.listen(80);

https.createServer(options, app).listen(port, () =>
{
    console.log(`Success! Your application is running on port ${port}.`);
})

let address = '174.69.163.24';

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
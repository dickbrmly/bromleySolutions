"use strict";

// server.js
const host = '174.69.163.24'
const express = require('express')

const bodyParser = require('body-parser')
var nodemailer = require('nodemailer')
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

app.use(
    bodyParser.urlencoded(
    {
        extended: true,
    })
)

app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/client/index.html');
    console.log('done');
});

const noop = (error) => { console.log(error) };

app.post('/newEmail', function(req, res)
{
    fs.appendFile('/home/dickbrmly/Documents/call.txt', JSON.stringify(req.body), noop)

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
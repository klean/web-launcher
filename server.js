'use strict';

var express = require('express'),
    app = express(),
    //auth = require('http-auth'),
    path = require('path');

// Auth Config
//var USER = 'prototype',
//    PASS = 'iddqd',
//    USEAUTH = false;
//
//var basic = auth.basic({
//    realm: 'Prototype'
//}, function (username, password, callback) {
//    callback(username === USER && password === PASS);
//});
//
//if (USEAUTH) {
//    app.use(auth.connect(basic));
//}

app.use(express.static(path.resolve('./dist')));

//Heroku
module.exports = app;

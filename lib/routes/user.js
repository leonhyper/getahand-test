'use strict';

var users = require('../models/user');
var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

if (process.env.NODE_ENV == 'test') {
    var mongodbUri = 'mongodb://issuesdb:1013702057zs@ds139883.mlab.com:39883/issues-test';
} else {
    // var mongodbUri ='mongodb://issuesdb:1013702057zs@ds139193.mlab.com:39193/issuesdb';
    var mongodbUri = 'mongodb://localhost:27017/issuesdb';
}

mongoose.connect(mongodbUri);

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});

router.register = function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var user = new users();

    user.name = req.body.name;
    user.pass = req.body.pass;

    user.save(function (err) {
        if (err) res.json({ message: 'Registration failed!', errmsg: err });else res.json({ message: 'Registration succeed!', data: user });
    });
};

router.validate = function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    users.findOne({ name: req.params.name, pass: req.params.pass }, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.send(user);
    });
};
router.validateName = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    users.findOne({ name: req.params.name }, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.send(user);
    });
};

module.exports = router;
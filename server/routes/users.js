'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


// GET USERS -- REMOVE BEFORE PRODUCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/users', (req, res, next) => {
  User
    .find()
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});

// POST USERS
router.post('/users', bodyParser.json(), (req, res, next) => {
  console.log('server side');
  const {firstName, lastName, username, password} = req.body;


  const hashPassword = User.hashPassword(password)
    .then(hash => {
      User
        .create({
          firstName,
          lastName, 
          username,
          password: hash
      })
      .then(user => {
        return res.status(201).json(user.toObject());
      }).catch(err => {
        console.log(err);
        if (err.reason === 'ValidationError') {
          return res.status(err.code).json(err);
        }
        res.status(500).json({code: 500, message: 'Internal server error'});
      });
    });

  
});

module.exports = router;
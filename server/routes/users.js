'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


// GET USERS
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

  const newUser = {
    firstName,
    lastName, 
    username,
    password
  };

  User
    .create(newUser)
    .then(results => {
      res.json(results);
    }).catch(err => console.log(err));
});

module.exports = router;
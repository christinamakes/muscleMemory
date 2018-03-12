'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


// LOGIN USER
router.post('/login', bodyParser.json(), (req, res, next) => {
  console.log('server side');
  const {username, password} = req.body;

  const user = { 
    username,
    password
  };

  if (user.username === 'username') {
  console.log('worked');
  }
  // User
  //   .create(newser)
  //   .then(results => {
  //     res.json(results);
  //   }).catch(err => console.log(err));
});

module.exports = router;
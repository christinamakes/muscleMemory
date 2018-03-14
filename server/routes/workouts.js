'use strict';

const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const passport = require('passport');



// const jwtAuth = passport.authenticate('jwt', { session: false });


// A protected endpoint which needs a valid JWT to access it
router.post('/workout', (req, res) => {
  const {userId, exercises, workoutName} = req.body;

  Workout
    .create({userId, exercises, workoutName})
    .then(results => {
      return res.status(200).json(results);
    });
  
});


router.get('/workout', (req, res) => {
  
  Workout
    .find()
    .populate('exercises')
    .then(results => {
      return res.status(200).json(results);
    });
  
});

module.exports = router;
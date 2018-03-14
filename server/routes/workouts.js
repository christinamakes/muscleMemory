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
  const {userId} = req.query;
  console.log(userId);
  Workout
    .find()
    .where({userId: userId})
    .populate('exercises')
    .then(results => {
      return res.status(200).json(results);
    });
  
});

router.get('/id/muscles', (req, res) => {
  const {userId} = req.query;
  console.log(userId);
  Workout
    .findById({_id: '5aa97fd8d44a2ba45ccf4f02'}) //or findById
    // .where({userId: userId})
    .populate({path: 'exercises', populate: {path: 'musclesWorked', model: 'Muscle'}})
    .then(workout => {
      const muscles = workout.exercises // array of all exercises in workout, includes muscles
      // array reducer
      .reduce((aggregate, exercise) => {
        return [...aggregate, ...exercise.musclesWorked];
      }, []);
      return res.status(200).json(muscles);
    });
  
});

module.exports = router;
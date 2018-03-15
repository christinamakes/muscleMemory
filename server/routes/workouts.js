'use strict';

const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const passport = require('passport');
const countBy = require('lodash.countby');
const flatMap = require('lodash.flatmap');



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
  console.log('GOT WORKOUT');
  Workout
    .find()
    .where({userId: userId})
    .populate('exercises')
    .then(results => {
      return res.status(200).json(results);
    });
  
});

router.get('/id/muscles', (req, res) => {
  const {userId, workoutId} = req.query;

  console.log(workoutId + ' userId');
  Workout
    .findById({_id: workoutId}) //or findById
    .where({userId: userId})
    .populate({path: 'exercises', populate: {path: 'musclesWorked', model: 'Muscle'}})
    .then(workout => {
      const muscles = workout.exercises // array of all exercises in workout, includes muscles
      // array reducer
      .reduce((aggregate, exercise) => {
        return [...aggregate, ...exercise.musclesWorked];
      }, []);

      const namesOnly = flatMap(muscles, (muscle) => {
        return [muscle.name];
      });
      return res.status(200).json(namesOnly);
    });
  
});

module.exports = router;
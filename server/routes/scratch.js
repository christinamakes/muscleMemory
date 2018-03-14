'use strict';

const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

router.get('/workout', (req, res) => {
  const {userId} = req.query;
  console.log(userId);
  Workout
    .findOne() //or findById
    // .where({userId: userId})
    .populate('exercises')
    .then(workout => {
      const muscles = workout.exercises // array of all exercises in workout, includes muscles
      // array reducer
      .reduce((aggregate, exercise) => {
        return [...aggregate, ...exercise.muscles];
      }, []);
      return console.log(muscles);
    });
  
});
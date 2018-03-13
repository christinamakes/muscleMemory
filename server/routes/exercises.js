'use strict';

const express = require('express');
const router = express.Router();
const Muscle = require('../models/muscles'); // MUST require for model to load
const Exercise = require('../models/exercise');
const passport = require('passport');



const jwtAuth = passport.authenticate('jwt', { session: false });


// A protected endpoint which needs a valid JWT to access it
router.post('/exercise', jwtAuth,(req, res) => {
  console.log('exercise endpoint');

  const {exerciseName, exerciseDescription} = req.body;
  const musclesWorked = ["5aa7efd0ead454399b4faf7e"]

  console.log(exerciseDescription + ' desc');
  console.log(exerciseName + ' name');
  console.log(musclesWorked + ' muscles');

  Exercise
    .create({exerciseName, exerciseDescription, musclesWorked})
    .then(results => {
      return res.status(200).json(results);
    });
  
});


router.get('/exercise', (req, res) => {
  
  Exercise
    .find()
    .populate('musclesWorked')
    .then(results => {
      return res.status(200).json(results);
    });
  
});

module.exports = router;
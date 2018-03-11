'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');
const Workout = require('../models/workout');
const seedUser = require('./user.json');
const seedWorkout = require('./workout.json');
const { DATABASE_URL } = require('../config');

const userPromise = User.create(seedUser);
const workoutPromise = Workout.insertMany(seedWorkout);

mongoose.connect(DATABASE_URL)
  .then(() => mongoose.connection.db.dropDatabase())

  .then(() => {
    return Promise.all([userPromise, workoutPromise])
  .then(() => {
    console.log('done');
  })
  .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

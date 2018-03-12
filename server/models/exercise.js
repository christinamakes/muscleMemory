'use strict';

const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
  exerciseName: [{type: String, required: true}],
  exerciseDescription: [{type: String, required: true}],
  musclesWorked: [{type: Number, required: true}],
  secondaryMusclesWorked: [{type: Number}]
});


module.exports = mongoose.model('Exercise', exerciseSchema);


'use strict';

const mongoose = require('mongoose');

const muscleSchema = mongoose.Schema({
  name: {type: String, required: true},
  muscleId: {type: Number, required: true},
});

module.exports = mongoose.model('Muscle', muscleSchema);
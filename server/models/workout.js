'use strict';

const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  exercises: [{type: String, default: ''}],
  musclesWorked: [{type: Number}],
  secondaryMusclesWorked: [{type: Number}]
});

workoutSchema.set('toObject', {
  transform: function(doc, ret) {
    ret.id = ret.__id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Workout', workoutSchema);


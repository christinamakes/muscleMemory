import React from 'react';
import ExerciseForm from './addExerciseForm'
import BrowseExercises from './browseExercises';
import MuscleMap from './muscleMap';


export default class SignupPage extends React.Component {
  render() {
    return (
      <div>
      <ExerciseForm />
      <MuscleMap />
      <BrowseExercises />
      </div>
    )
  }
}




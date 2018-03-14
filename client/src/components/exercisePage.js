import React from 'react';
import ExerciseForm from './exercises/addExerciseForm'
import BrowseExercises from './exercises/browseExercises';
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




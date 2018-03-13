import React from 'react';
import ExerciseForm from './addExerciseForm'
import BrowseExercises from './browseExercises';

export default class SignupPage extends React.Component {
  render() {
    return (
      <div>
      <ExerciseForm />
      <BrowseExercises />
      </div>
    )
  }
}




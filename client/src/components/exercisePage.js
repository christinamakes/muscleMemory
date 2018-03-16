import React from 'react';
import ExerciseForm from './exercises/addExerciseForm'
import BrowseExercises from './exercises/browseExercises';
import MuscleMap from './muscleMap';
import requiresLogin from './requires-login';


class ExercisePage extends React.Component {
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

export default requiresLogin()(ExercisePage)


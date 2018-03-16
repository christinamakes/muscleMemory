import React from 'react';
import WorkoutForm from './workout/createWorkout';
import requiresLogin from './requires-login';



class WorkoutPage extends React.Component {
  render() {
    return (
      <div>
      <WorkoutForm />
      </div>
    )
  }
}


export default requiresLogin()(WorkoutPage)

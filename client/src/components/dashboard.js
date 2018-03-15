import React from 'react';

import YourWorkouts from './workout/yourWorkouts';
import LogWorkout from './workout/logWorkout'
import WorkedMuscles from './muscles/workedMuscles'
import requiresLogin from './requires-login';
import {connect} from 'react-redux';

class Dashboard extends React.Component {

    render() {
      console.log('dashboard');
      return(
        <div className='dashboard'>
        <h1>Hi there</h1>
        <YourWorkouts />
        <h1>Recently used muscles</h1>
        <WorkedMuscles />
        <h1>Log a workout</h1>
        <LogWorkout />
        </div>
      )
    }
  }

  export const mapStatetoProps = (state,props) => ({
    loggedIn: state.auth.currentUser != null,
    recentMuscles: state.workout.muscles ? state.workout.muscles : [],
    recentWorkout: state.auth.currentUser ? state.auth.currentUser.recentWorkout : 'Please log in to see recent workout'
  }) 
  
  export default requiresLogin()(connect(mapStatetoProps)(Dashboard))

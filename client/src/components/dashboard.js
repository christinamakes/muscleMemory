import React from 'react';

import YourWorkouts from './workout/yourWorkouts';
import MuscleMap from './muscleMap';
import LogWorkout from './workout/logWorkout'

export default class Dashboard extends React.Component {

    render() {
      return(
        <div className='dashboard'>
        <YourWorkouts />
        {/* <MuscleMap /> */}
        <LogWorkout />
        </div>
      )
    }
  }

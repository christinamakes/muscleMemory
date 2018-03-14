import React from 'react';

import YourWorkouts from './workout/yourWorkouts';
import MuscleMap from './muscleMap';
import LogWorkout from './workout/logWorkout'
import WorkedMuscles from './muscles/workedMuscles'
import { userInfo } from 'os';

export default class Dashboard extends React.Component {

    render() {
      return(
        <div className='dashboard'>
        <h1>Your workouts</h1>
        <YourWorkouts />
        <h1>Recently used muscles</h1>
        <WorkedMuscles />
        {/* <MuscleMap /> */}
        <h1>Log a workout</h1>
        <LogWorkout />
        </div>
      )
    }
  }


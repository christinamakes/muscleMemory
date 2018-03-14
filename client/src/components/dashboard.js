import React from 'react';

import YourWorkouts from './workout/yourWorkouts';
import MuscleMap from './muscleMap';

export default class Dashboard extends React.Component {

    render() {
      return(
        <div className='dashboard'>
        <YourWorkouts />
        <MuscleMap />
        </div>
      )
    }
  }

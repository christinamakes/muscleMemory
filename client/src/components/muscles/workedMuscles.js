import React from 'react';
import {connect} from 'react-redux';
import {getMusclesFromWorkout} from '../../actions/workout'
import MuscleMap from '../muscleMap';
import SVGUsage from '../generateColorMap';

// console.log(generateColorMap)


class WorkedMuscles extends React.Component {

  componentDidMount() {
    if (this.props.loggedIn && this.props.recentWorkout) this.props.dispatch(getMusclesFromWorkout());
  }

  // TODO re-render when log a different workout!!!!!!!!!!!!!!

  render () {
    let musclesUsed;
    let colorMap;
    const usedMuscles = this.props.recentMuscles;

    // if (usedMuscles !== []) {
    //   colorMap = generateColorMap(usedMuscles)
    //   console.log(colorMap);
    //   console.log(colorMap.Arms)
    // }

    return (<div>
      {musclesUsed}
      <SVGUsage 
        usedMuscles={usedMuscles}/> {/* SVG */}
      {/* <MuscleMap 
        chestColor={colorMap.Chest || '#5ca2be'}
        armColor={colorMap.Arms || '#5ca2be'}
        shoulderColor={colorMap.Shoulders || '#5ca2be'}
        absColor={colorMap.Abs || '#5ca2be'}
        legsColor={colorMap.Legs || '#5ca2be'}
        backLegs={colorMap.Legs || '#5ca2be'}
        backArms={colorMap.Arms || '#5ca2be'}
        glutesColor={colorMap.Glutes || '#5ca2be'}
        backColor={colorMap.Back || '#5ca2be'}
      /> */}
      </div>)
  }
  
}

export const mapStatetoProps = (state,props) => ({
  loggedIn: state.auth.currentUser != null,
  recentMuscles: state.workout.muscles ? state.workout.muscles : [],
  recentWorkout: state.auth.currentUser ? state.auth.currentUser.recentWorkout : 'Please log in to see recent workout'
}) 

export default connect(mapStatetoProps)(WorkedMuscles)
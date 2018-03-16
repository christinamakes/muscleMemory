import React from 'react';
import {connect} from 'react-redux';
import {getMusclesFromWorkout} from '../../actions/workout'
import MuscleMap from '../muscleMap';
import {generateColorMap} from '../generateColorMap';
// console.log(generateColorMap)


class WorkedMuscles extends React.Component {

  componentDidMount() {
    if (this.props.loggedIn && this.props.recentWorkout) this.props.dispatch(getMusclesFromWorkout());
  }

  // TODO re-render when log a different workout!!!!!!!!!!!!!!

  render () {
    let musclesUsed;
    let colorMap;
    const recentW = this.props.recentWorkout
    const usedMuscles = this.props.recentMuscles;
  
    // if (this.props.loggedIn && this.props.recentWorkout) {
    //   musclesUsed = this.props.recentMuscles.map((muscle, index) => 
    //     <div key={index}>
    //     <h1>{muscle}</h1>
    //     </div>)
    // } else return <h1>Please log a workout</h1>
  
    // color = {3: 'red'}
    // muscles = {'arms': 3}
    // const keys = {
    //   0: 'black',
    //   1: 'yellow',
    //   2: 'orange',
    //   3: 'red' // greater than 3
    // }
    console.log(usedMuscles)

    if (usedMuscles !== []) {
      colorMap = generateColorMap(usedMuscles)
      console.log(colorMap);
      console.log(colorMap.Arms)

    }

    return (<div>
      <h1>{`Your most recent workout was ${recentW}`}</h1>
      {musclesUsed} {/* SVG */}
      <MuscleMap 
        chestColor={colorMap.Chest || '#5ca2be'}
        armColor={colorMap.Arms || '#5ca2be'}
        shoulderColor={colorMap.Shoulders || '#5ca2be'}
        absColor={colorMap.Abs || '#5ca2be'}
        legsColor={colorMap.Legs || '#5ca2be'}
        backLegs={colorMap.Legs || '#5ca2be'}
        backArms={colorMap.Arms || '#5ca2be'}
        glutesColor={colorMap.Glutes || '#5ca2be'}
        backColor={colorMap.Back || '#5ca2be'}
      />
      </div>)
  }
  
}

export const mapStatetoProps = (state,props) => ({
  loggedIn: state.auth.currentUser != null,
  recentMuscles: state.workout.muscles ? state.workout.muscles : [],
  recentWorkout: state.auth.currentUser ? state.auth.currentUser.recentWorkout : 'Please log in to see recent workout'
}) 

export default connect(mapStatetoProps)(WorkedMuscles)
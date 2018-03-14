import React from 'react';
import {connect} from 'react-redux';
import {getMusclesFromWorkout} from '../../actions/workout'

class WorkedMuscles extends React.Component {

  componentDidMount() {
    if (this.props.loggedIn) this.props.dispatch(getMusclesFromWorkout());
  }

  render () {
    let musclesUsed;
    
    if (this.props.loggedIn && this.props.recentMuscles) {

      console.log(this.props.recentMuscles)

      musclesUsed = this.props.recentMuscles.map((muscle, index) => 
        <div key={index}>
        <h1>{muscle.name}</h1>
        {/* <h1>{workout.exercises}</h1> */}
        </div>)
    }
  
    return (<h1>{musclesUsed}</h1>)
  }
}

export const mapStatetoProps = (state,props) => ({
  loggedIn: state.auth.currentUser != null,
  recentMuscles: state.workout.muscles
}) 

export default connect(mapStatetoProps)(WorkedMuscles)
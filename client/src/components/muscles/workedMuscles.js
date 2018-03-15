import React from 'react';
import {connect} from 'react-redux';
import {getMusclesFromWorkout} from '../../actions/workout'
import requiresLogin from '../requires-login';

class WorkedMuscles extends React.Component {

  componentDidMount() {
    if (this.props.loggedIn && this.props.recentWorkout) this.props.dispatch(getMusclesFromWorkout());
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props.recentWorkout);
  //   console.log(this.nextProps.recentWorkout + ' next');
  //   if (this.props.recentWorkout !== null && this.nextProps.recentWorkout !== this.props.recentWorkout)
  //   this.props.dispatch(getMusclesFromWorkout());
  // }
  // TODO re-render when log a different workout!!!!!!!!!!!!!!

  render () {
    console.log('Worked muscles mount')
    let musclesUsed;
    let recentW = this.props.recentWorkout
  
    if (this.props.loggedIn && this.props.recentWorkout) {
      musclesUsed = this.props.recentMuscles.map((muscle, index) => 
        <div key={index}>
        <h1>{muscle}</h1>
        </div>)
    } else return <h1>Please log a workout</h1>
  
    return (<div>
      <h1>{`Your most recent workout was ${recentW}`}</h1>
      {musclesUsed}</div>)
  }
}

export const mapStatetoProps = (state,props) => ({
  loggedIn: state.auth.currentUser != null,
  recentMuscles: state.workout.muscles ? state.workout.muscles : [],
  recentWorkout: state.auth.currentUser ? state.auth.currentUser.recentWorkout : 'Please log in to see recent workout'
}) 

export default connect(mapStatetoProps)(WorkedMuscles)
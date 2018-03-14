import React from 'react';
import {connect} from 'react-redux';
import {completeWorkout} from '../../actions/workout'
import {Field, reduxForm} from 'redux-form';
import Input from '../input';

// STYLES
import {SubmitButton} from '../styles/buttons'


let workoutSelect;

class LogWorkout extends React.Component {

  componentDidMount() {
    if (this.props.loggedIn) this.props.dispatch(completeWorkout());
  }

  
  onSubmit(values) {
    const {workoutSelected} = values;
    
    const checkedWorkout = Object.keys(workoutSelected).filter(workout => workoutSelected[workout]) // return all muscles set to true
    console.log(checkedWorkout + ' SELECTED')
    return this.props.dispatch(completeWorkout(checkedWorkout))
      .then(() => console.log("logging workout " + values))
  }

  
  render() {
    if (this.props.workouts) {
      workoutSelect = this.props.workouts.map((workout, index) =>  { 
        const name = workout.workoutName;
        const wId = workout._id;
        return (
          <div key={index}>
            <label htmlFor={name}>{name}</label>
            <Field
              component={Input}
              id={name}
              type='checkbox'
              name={`workoutSelected.${wId}`}
              />
            </div>)
        })
      };
    
    return (
      <div>
      
      <form className='complete-workout-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {workoutSelect}

        <SubmitButton type='submit' disabled={this.props.pristine || this.props.submitting}>Log Workout</SubmitButton>
      </form>
      </div>
    );
  }
}

export const mapStatetoProps = (state,props) => ({
  workouts: state.workout.workouts,
  loggedIn: state.auth.currentUser != null
}) 


export default reduxForm({
  form: 'logWorkout',
  // onSubmitFail: (errors, dispatch) => {
    // dispatch(focus('signup', Object.keys(errors[0])))
  // }
})(connect(mapStatetoProps)(LogWorkout));


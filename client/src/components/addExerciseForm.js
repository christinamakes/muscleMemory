import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {newExercise} from '../actions/exercises'
// import validators

import Input from './input';
import {required, notEmpty} from '../validators'

import {SubmitButton} from './styles/buttons'


export class ExerciseForm extends React.Component {
  onSubmit(values) {
    const {exerciseName, exerciseDescription, bicep} = values;
  
    return this.props.dispatch(newExercise(exerciseName, exerciseDescription, bicep))
      .then(() => console.log("adding exercise" + exerciseDescription))
  }

  render() {
    return (
      <form className='add-exercise-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor='exerciseName'>Exercise Name</label>
        <Field 
          component={Input} 
          type='text' 
          name='exerciseName'
          validate={[required, notEmpty]} />
        <label htmlFor='exerciseDescription'>Exercise Description</label>
        <Field 
          component={Input} 
          type='text' 
          name='exerciseDescription'
          validate={[required, notEmpty]} />
        <label htmlFor='bicep'>Biceps</label>
        <Field 
          component={Input}
          id='bicep' 
          type='checkbox' 
          name='bicep'
          />
        <SubmitButton type='submit' disabled={this.props.pristine || this.props.submitting}>Login</SubmitButton>
      </form>
    );
  }
}

export default reduxForm({
  form: 'exercise',
  // onSubmitFail: (errors, dispatch) => {
    // dispatch(focus('signup', Object.keys(errors[0])))
  // }
})(ExerciseForm);
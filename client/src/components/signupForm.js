import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import login action
// import validators
import {registerUser} from '../actions/users';
import Input from './input';

export class SignupForm extends React.Component {
  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName}
    console.log(user);
    return this.props.dispatch(registerUser(user))
      .then(() => console.log("dispatched!"));
      // this.props.dispatch(login(username,password)));
  }

  render() {
    return (
      <form className='signup-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor='firstName'>First Name</label>
        <Field component={Input} type='text' name='firstName' />
        <label htmlFor='lastName'>Last Name</label>
        <Field component={Input} type='text' name='lastName' />
        <label htmlFor='username'>Username</label>
        <Field component={Input} type='text' name='username' />
        <label htmlFor='password'>Password</label>
        <Field component={Input} type='password' name='password' />
        <label htmlFor='confirmPassword'>Confim Password</label>
        <Field component={Input} type='password' name='confirmPassword' />
        <button type='submit' disabled={this.props.pristine || this.props.submitting}>Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup',
  // onSubmitFail: (errors, dispatch) => {
    // dispatch(focus('signup', Object.keys(errors[0])))
  // }
})(SignupForm);